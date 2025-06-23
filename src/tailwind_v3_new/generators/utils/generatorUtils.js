import { generateCssString } from "../../utils/index";

/**
 * Generate a simple property-value CSS utility
 * Used for simple utilities that map directly to a single CSS property
 *
 * @param {Object} configOptions - Configuration options
 * @param {string} cssProperty - The CSS property to generate
 * @param {string} utilityPrefix - The prefix for utility classes
 * @param {Object} valueMap - Map of tailwind classes to CSS property values
 * @param {string} variantKey - Key for variants in configOptions
 * @param {function} transformValue - Optional function to transform the value
 * @returns {string} Generated CSS string
 */
export function generateSimpleUtility({
  configOptions,
  cssProperty,
  utilityPrefix,
  valueMap,
  variantKey,
  transformValue = (value) => value,
}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;
  const prefix = `${globalPrefix}${utilityPrefix}`;
  const variantOptions = variants[variantKey] || [];

  return generateCssString(({ pseudoClass, getCssByOptions }) => {
    return getCssByOptions(
      valueMap,
      (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variantOptions)} {
            ${cssProperty}: ${transformValue(value)};
          }
        `
    );
  }, configOptions);
}

/**
 * Generate a color-based utility with opacity support
 * Used for utilities like text-color, background-color, border-color, etc.
 *
 * @param {Object} configOptions - Configuration options
 * @param {string} cssProperty - The CSS property to set (e.g., "color", "background-color")
 * @param {string} utilityPrefix - The prefix for utility classes (e.g., "text", "bg")
 * @param {Object} colorMap - Map of color names to color values
 * @param {string} variantKey - Key for variants in configOptions
 * @param {string} opacityVar - The CSS variable name for opacity (e.g., "--text-opacity")
 * @param {function} extraTransforms - Additional transforms for generated CSS
 * @returns {string} Generated CSS string
 */
export function generateColorUtility({
  configOptions,
  cssProperty,
  utilityPrefix,
  colorMap,
  variantKey,
  opacityVar,
  extraTransforms = (key, cssString) => cssString,
}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;
  const prefix = `${globalPrefix}${utilityPrefix}`;
  const variantOptions = variants[variantKey] || [];

  return generateCssString(({ pseudoClass, getCssByColors }) => {
    const cssString = getCssByColors(colorMap, (key, value, rgbValue) => {
      let rgbPropertyValue = "";
      if (rgbValue) {
        rgbPropertyValue = `${cssProperty}: rgba(${rgbValue}, var(${opacityVar}));`;
      }

      let baseCSS = `
            ${pseudoClass(`${prefix}-${key}`, variantOptions)} {
              ${opacityVar}: 1;
              ${cssProperty}: ${value};${rgbPropertyValue}
            }
          `;

      return extraTransforms(key, baseCSS);
    });
    return cssString;
  }, configOptions);
}

/**
 * Generate directional utilities (like margin, padding)
 * Used for utilities that have directional variants (top, right, bottom, left, x, y)
 *
 * @param {Object} configOptions - Configuration options
 * @param {string} cssProperty - Base CSS property without direction (e.g., "margin", "padding")
 * @param {string} utilityPrefix - Single letter prefix for utility classes (e.g., "m", "p")
 * @param {Object} valueMap - Map of size keys to size values
 * @param {string} variantKey - Key for variants in configOptions
 * @param {boolean} supportNegative - Whether to support negative values
 * @returns {string} Generated CSS string
 */
export function generateDirectionalUtility({
  configOptions,
  cssProperty,
  utilityPrefix,
  valueMap,
  variantKey,
  supportNegative = false,
}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;
  const prefix = `${globalPrefix}${utilityPrefix}`;
  const variantOptions = variants[variantKey] || [];

  // Clone the value map to avoid modifying the original
  const values = { ...valueMap };

  // Add negative values if supported
  if (supportNegative) {
    Object.entries(values).forEach(([key, value]) => {
      values[`-${key}`] = `-${value}`.replace("--", "-");
    });
  }

  return generateCssString(({ pseudoClass, getCssByOptions }) => {
    const cssString = getCssByOptions(values, (keyTmp, value) => {
      let currentPrefix = prefix;
      let key = keyTmp;

      // Handle negative values
      if (supportNegative && `${key}`.indexOf("-") >= 0) {
        key = key.split("-").join("");
        currentPrefix = `${globalPrefix}-${utilityPrefix}`;
      }

      return `
          ${pseudoClass(`${currentPrefix}-${key}`, variantOptions)} {
            ${cssProperty}: ${value};
          }
          ${pseudoClass(`${currentPrefix}y-${key}`, variantOptions)} {
            ${cssProperty}-top: ${value};
            ${cssProperty}-bottom: ${value};
          }
          ${pseudoClass(`${currentPrefix}x-${key}`, variantOptions)} {
            ${cssProperty}-left: ${value};
            ${cssProperty}-right: ${value};
          }
          ${pseudoClass(`${currentPrefix}t-${key}`, variantOptions)} {
            ${cssProperty}-top: ${value};
          }
          ${pseudoClass(`${currentPrefix}r-${key}`, variantOptions)} {
            ${cssProperty}-right: ${value};
          }
          ${pseudoClass(`${currentPrefix}b-${key}`, variantOptions)} {
            ${cssProperty}-bottom: ${value};
          }
          ${pseudoClass(`${currentPrefix}l-${key}`, variantOptions)} {
            ${cssProperty}-left: ${value};
          }
          ${pseudoClass(`${currentPrefix}s-${key}`, variantOptions)} {
            ${cssProperty}-inline-start: ${value};
          }
          ${pseudoClass(`${currentPrefix}e-${key}`, variantOptions)} {
            ${cssProperty}-inline-end: ${value};
          }
        `;
    });
    return cssString;
  }, configOptions);
}

/**
 * Generate utilities for spacing between elements (space-x, space-y)
 *
 * @param {Object} configOptions - Configuration options
 * @param {Object} valueMap - Map of size keys to size values
 * @returns {string} Generated CSS string
 */
export function generateSpaceBetweenUtility({ configOptions, valueMap }) {
  const { prefix: globalPrefix, variants = {} } = configOptions;
  const prefix = `${globalPrefix}space`;
  const variantOptions = variants.space || [];

  // Clone the value map to avoid modifying the original
  const values = { ...valueMap };

  // Add negative values
  Object.entries(values).forEach(([key, value]) => {
    values[`-${key}`] = `-${value}`.replace("--", "-");
  });

  return generateCssString(({ pseudoClass }) => {
    const generateSpace = (position, key, value) => {
      let spacePosition = "x";
      let margin1 = "left";
      let margin2 = "right";

      if (position === "y") {
        spacePosition = "y";
        margin1 = "top";
        margin2 = "bottom";
      }

      const positiveSelector = (pseudoString) =>
        `${prefix}-${spacePosition}-${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`;

      const negativeSelector = (pseudoString) =>
        `-${prefix}-${spacePosition}-${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`;

      return `
        ${pseudoClass(positiveSelector, variantOptions)} {
          --space-${spacePosition}-reverse: 0;
          margin-${margin1}: calc(${value} * calc(1 - var(--space-${spacePosition}-reverse)));
          margin-${margin2}: calc(${value} * var(--space-${spacePosition}-reverse));
        }
        ${pseudoClass(negativeSelector, variantOptions)} {
          --space-${spacePosition}-reverse: 0;
          margin-${margin1}: calc(-${value} * calc(1 - var(--space-${spacePosition}-reverse)));
          margin-${margin2}: calc(-${value} * var(--space-${spacePosition}-reverse));
        }
      `;
    };

    // Generate CSS for both x and y directions
    let cssString = "";
    Object.entries(values).forEach(([key, value]) => {
      cssString += generateSpace("y", key, value);
      cssString += generateSpace("x", key, value);
    });

    // Add reverse utilities
    cssString += `
      ${pseudoClass(
        (pseudoString) =>
          `${prefix}-x-reverse${pseudoString} > :not([hidden]) ~ :not([hidden])`,
        variantOptions
      )} {
        --space-x-reverse: 1;
      }
      ${pseudoClass(
        (pseudoString) =>
          `${prefix}-y-reverse${pseudoString} > :not([hidden]) ~ :not([hidden])`,
        variantOptions
      )} {
        --space-y-reverse: 1;
      }
    `;

    return cssString;
  }, configOptions);
}
