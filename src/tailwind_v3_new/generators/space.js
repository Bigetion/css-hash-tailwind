import { generateCssString } from "../utils/index";

/**
 * Generates space-between utility classes for controlling margins between elements
 * Used for space-x and space-y utilities
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;
  const prefix = `${globalPrefix}space`;
  const variantOptions = variants.space || [];

  // Get space values from theme
  const { space: themeSpace = {} } = theme;

  // Clone the value map to avoid modifying the original theme object
  const valueMap = { ...themeSpace };

  // Add negative values for each space value
  Object.entries(themeSpace).forEach(([key, value]) => {
    if (!key.startsWith("-")) {
      valueMap[`-${key}`] = `-${value}`.replace("--", "-");
    }
  });

  return generateCssString(({ pseudoClass }) => {
    /**
     * Generate space utilities for a specific direction (x or y)
     *
     * @param {string} direction - 'x' for horizontal, 'y' for vertical
     * @param {string} key - The size key (e.g., '1', '2', '4', etc.)
     * @param {string} value - The CSS value (e.g., '0.25rem', '1rem', etc.)
     * @returns {string} Generated CSS
     */
    const generateDirectionalSpace = (direction, key, value) => {
      const properties =
        direction === "x"
          ? { axis: "x", first: "left", second: "right" }
          : { axis: "y", first: "top", second: "bottom" };

      // Selector for targeting direct siblings (skipping hidden elements)
      const selector = (type, pseudoString) =>
        `${type}${prefix}-${properties.axis}-${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`;

      // Generate both positive and negative utilities
      return `
        ${pseudoClass((ps) => selector("", ps), variantOptions)} {
          --space-${properties.axis}-reverse: 0;
          margin-${properties.first}: calc(${value} * calc(1 - var(--space-${
        properties.axis
      }-reverse)));
          margin-${properties.second}: calc(${value} * var(--space-${
        properties.axis
      }-reverse));
        }
        ${pseudoClass((ps) => selector("-", ps), variantOptions)} {
          --space-${properties.axis}-reverse: 0;
          margin-${properties.first}: calc(-${value} * calc(1 - var(--space-${
        properties.axis
      }-reverse)));
          margin-${properties.second}: calc(-${value} * var(--space-${
        properties.axis
      }-reverse));
        }
      `;
    };

    // Generate all space utilities
    let cssString = "";

    // Generate for each size in the theme
    Object.entries(valueMap).forEach(([key, value]) => {
      // Skip generating negative values for already negative keys
      if (!key.startsWith("-")) {
        cssString += generateDirectionalSpace("y", key, value);
        cssString += generateDirectionalSpace("x", key, value);
      }
    });

    // Add reverse utilities
    cssString += `
      ${pseudoClass(
        (ps) => `${prefix}-x-reverse${ps} > :not([hidden]) ~ :not([hidden])`,
        variantOptions
      )} {
        --space-x-reverse: 1;
      }
      ${pseudoClass(
        (ps) => `${prefix}-y-reverse${ps} > :not([hidden]) ~ :not([hidden])`,
        variantOptions
      )} {
        --space-y-reverse: 1;
      }
    `;

    return cssString;
  }, configOptions);
}
