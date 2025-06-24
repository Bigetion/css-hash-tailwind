import { generateCssString } from "../utils/index";

/**
 * Generate divide color utilities
 * Applies border colors to elements using the '> :not([hidden]) ~ :not([hidden])' selector pattern
 * Uses CSS variable for opacity control
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, theme = {} } = configOptions;
  const prefix = `${globalPrefix}divide`;
  const { divideColor = {} } = theme;

  return generateCssString(({ pseudoClass, getCssByColors }) => {
    return getCssByColors(divideColor, (key, value, rgbValue) => {
      // Generate the CSS for the divide color
      const selectorFn = (pseudoString) =>
        `${prefix}-${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`;

      let rgbPropertyValue = rgbValue
        ? `border-color: rgba(${rgbValue}, var(--divide-opacity));`
        : "";

      return `
            ${pseudoClass(selectorFn, configOptions.variants.divideColor, {})} {
              --divide-opacity: 1;
              border-color: ${value};${rgbPropertyValue}
            }
          `;
    });
  }, configOptions);
}
