import { generateCssString } from "../utils/index";

/**
 * Generate divide opacity utilities
 * Sets the CSS variable --divide-opacity used by divideColor utilities
 * Uses the custom '> :not([hidden]) ~ :not([hidden])' selector pattern
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, theme = {} } = configOptions;
  const prefix = `${globalPrefix}divide-opacity`;
  const { divideOpacity = {} } = theme;

  return generateCssString(({ pseudoClass, getCssByOptions }) => {
    return getCssByOptions(divideOpacity, (key, value) => {
      // Create the custom selector function for divide utilities
      const selectorFn = (pseudoString) =>
        `${prefix}-${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`;

      return `
          ${pseudoClass(selectorFn, configOptions.variants.divideOpacity)} {
            --divide-opacity: ${value};
          }
        `;
    });
  }, configOptions);
}
