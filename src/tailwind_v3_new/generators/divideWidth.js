import { generateCssString } from "../utils/index";

/**
 * Generate divide width utilities
 * Applies border widths with reverse options using the '> :not([hidden]) ~ :not([hidden])' selector pattern
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, theme = {} } = configOptions;
  const prefix = `${globalPrefix}divide`;
  const { divideWidth = {} } = theme;

  return generateCssString(({ pseudoClass }) => {
    /**
     * Helper function to generate divide width CSS for a specific axis (x or y)
     *
     * @param {string} axis - The axis ('x' or 'y') to generate styles for
     * @param {string} key - The key from the divideWidth theme object
     * @param {string} value - The corresponding width value
     * @returns {string} Generated CSS string
     */
    const generateDivideAxisWidth = (axis, keyTmp, value) => {
      // Define border positions based on axis
      const borderPositions =
        axis === "y"
          ? { first: "top", second: "bottom" }
          : { first: "left", second: "right" };

      // Format the key (handling 'default' case)
      const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";

      // Create the custom selector function
      const selectorFn = (pseudoString) =>
        `${prefix}-${axis}${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`;

      return `
          ${pseudoClass(selectorFn, configOptions.variants.divideWidth)} {
            --divide-${axis}-reverse: 0;
            border-${
              borderPositions.first
            }-width: calc(${value} * calc(1 - var(--divide-${axis}-reverse)));
            border-${
              borderPositions.second
            }-width: calc(${value} * var(--divide-${axis}-reverse));
          }
        `;
    };

    // Generate CSS for each width value in both x and y directions
    let cssString = "";
    Object.entries(divideWidth).forEach(([key, value]) => {
      cssString += generateDivideAxisWidth("y", key, value);
      cssString += generateDivideAxisWidth("x", key, value);
    });

    // Add reverse utility classes
    const reverseYSelectorFn = (pseudoString) =>
      `${prefix}-y-reverse${pseudoString} > :not([hidden]) ~ :not([hidden])`;

    const reverseXSelectorFn = (pseudoString) =>
      `${prefix}-x-reverse${pseudoString} > :not([hidden]) ~ :not([hidden])`;

    cssString += `
        ${pseudoClass(reverseYSelectorFn, configOptions.variants.divideWidth)} {
          --divide-y-reverse: 1;
        }
        ${pseudoClass(reverseXSelectorFn, configOptions.variants.divideWidth)} {
          --divide-x-reverse: 1;
        }
      `;

    return cssString;
  }, configOptions);
}
