import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate flex-direction utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Define the flex direction values directly in the generator
  // This differs from other generators that typically get values from theme
  const valueMap = {
    row: "row",
    "row-reverse": "row-reverse",
    col: "column",
    "col-reverse": "column-reverse",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "flex-direction",
    utilityPrefix: "flex", // The prefix is "flex" (e.g., flex-row, flex-col)
    valueMap,
    variantKey: "flexDirection",
  });
}
