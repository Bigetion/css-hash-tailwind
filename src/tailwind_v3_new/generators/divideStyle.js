import { generateCssString } from "../utils/index";

/**
 * Generate divide style utilities
 * Applies border styles to elements using the '> :not([hidden]) ~ :not([hidden])' selector pattern
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { prefix: globalPrefix } = configOptions;
  const prefix = `${globalPrefix}divide`;

  // Define the available border styles
  const borderStyles = ["solid", "dashed", "dotted", "double", "none"].reduce(
    (acc, style) => {
      acc[style] = style;
      return acc;
    },
    {}
  );

  return generateCssString(({ pseudoClass, getCssByOptions }) => {
    return getCssByOptions(borderStyles, (key, value) => {
      // Create the custom selector function for divide utilities
      const selectorFn = (pseudoString) =>
        `${prefix}-${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`;

      return `
          ${pseudoClass(selectorFn, configOptions.variants.divideStyle)} {
            border-style: ${value};
          }
        `;
    });
  }, configOptions);
}
