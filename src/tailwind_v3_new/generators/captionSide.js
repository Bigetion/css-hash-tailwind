import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate caption-side utility classes
 * Controls the placement of a table caption (top or bottom of the table)
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Define the value map for caption-side options
  const valueMap = {
    top: "top",
    bottom: "bottom",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "caption-side",
    utilityPrefix: "caption",
    valueMap,
    variantKey: "captionSide",
  });
}
