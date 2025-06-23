import { generateCssString } from "./index";

/**
 * Creates a simple generator for CSS properties without variations
 * @param {Object} config Configuration object
 * @param {string} config.prefix CSS class prefix
 * @param {string} config.property CSS property
 * @param {string} config.themeKey Key in theme object
 * @param {Function} config.valueFormatter Optional function to format values
 * @returns {Function} Generator function
 */
export function createSimpleGenerator({
  prefix,
  property,
  themeKey,
  valueFormatter = (value) => value,
}) {
  return function generator(configOptions = {}) {
    const { prefix: globalPrefix, theme = {} } = configOptions;
    const fullPrefix = `${globalPrefix}${prefix}`;
    const themeValues = theme[themeKey] || {};

    const responsiveCssString = generateCssString(({ getCssByOptions, pseudoClass }) => {
      const cssString = getCssByOptions(
        themeValues,
        (key, value) => `
          ${pseudoClass(`${fullPrefix}-${key}`, configOptions.variants[themeKey])} {
            ${property}: ${valueFormatter(value, key)};
          }
        `
      );
      return cssString;
    }, configOptions);

    return responsiveCssString;
  };
}

/**
 * Creates a color generator for CSS color properties
 * @param {Object} config Configuration object
 * @param {string} config.prefix CSS class prefix
 * @param {string} config.property CSS property
 * @param {string} config.themeKey Key in theme object
 * @param {boolean} config.supportsOpacity Whether the property supports opacity
 * @param {string} config.opacityVar CSS variable for opacity
 * @param {Function} config.customHandler Optional function to handle special cases
 * @returns {Function} Generator function
 */
export function createColorGenerator({
  prefix,
  property,
  themeKey,
  supportsOpacity = false,
  opacityVar,
  customHandler,
}) {
  return function generator(configOptions = {}) {
    const { prefix: globalPrefix, theme = {} } = configOptions;
    const fullPrefix = `${globalPrefix}${prefix}`;
    const colors = theme[themeKey] || {};

    const responsiveCssString = generateCssString(({ getCssByColors, pseudoClass, isValidCssColor }) => {
      const cssString = getCssByColors(
        colors,
        (key, value, rgbValue) => {
          if (customHandler) {
            const customResult = customHandler({
              key, 
              value, 
              rgbValue, 
              prefix: fullPrefix,
              property,
              opacityVar,
              isValidCssColor,
              pseudoClass,
              variants: configOptions.variants[themeKey]
            });
            
            if (customResult) return customResult;
          }

          if (supportsOpacity && rgbValue) {
            return `
              ${pseudoClass(`${fullPrefix}-${key}`, configOptions.variants[themeKey])} {
                ${opacityVar}: 1;
                ${property}: rgba(${rgbValue}, var(${opacityVar}));
              }
              ${pseudoClass(`${fullPrefix}-opacity`, configOptions.variants[themeKey + "Opacity"] || [])} {
                ${opacityVar}: var(--opacity-value);
              }
            `;
          } else {
            return `
              ${pseudoClass(`${fullPrefix}-${key}`, configOptions.variants[themeKey])} {
                ${property}: ${value};
              }
            `;
          }
        }
      );
      return cssString;
    }, configOptions);

    return responsiveCssString;
  };
}

/**
 * Creates a variant generator for CSS properties with multiple variants
 * @param {Object} config Configuration object
 * @param {string} config.prefix CSS class prefix
 * @param {Object} config.variants Object mapping variant suffixes to CSS properties
 * @param {string} config.themeKey Key in theme object
 * @param {Function} config.valueFormatter Optional function to format values
 * @returns {Function} Generator function
 */
export function createVariantGenerator({
  prefix,
  variants,
  themeKey,
  valueFormatter = (value) => value,
}) {
  return function generator(configOptions = {}) {
    const { prefix: globalPrefix, theme = {} } = configOptions;
    const basePrefix = `${globalPrefix}${prefix}`;
    const themeValues = theme[themeKey] || {};

    const responsiveCssString = generateCssString(({ getCssByOptions, pseudoClass }) => {
      let cssString = "";

      // Process each variant
      Object.entries(variants).forEach(([variantKey, properties]) => {
        const fullPrefix = variantKey === 'default' 
          ? basePrefix 
          : `${basePrefix}-${variantKey}`;
          
        const propertiesArr = Array.isArray(properties) ? properties : [properties];
        
        cssString += getCssByOptions(
          themeValues,
          (key, value) => `
            ${pseudoClass(`${fullPrefix}-${key}`, configOptions.variants[themeKey])} {
              ${propertiesArr.map(prop => `${prop}: ${valueFormatter(value, key)};`).join("\n")}
            }
          `
        );
      });
      
      return cssString;
    }, configOptions);

    return responsiveCssString;
  };
}
