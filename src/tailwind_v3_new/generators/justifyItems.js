import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate justify-items utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Create a value map from the array of property options
  const valueMap = {
    auto: "auto",
    start: "start",
    end: "end",
    center: "center",
    stretch: "stretch",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "justify-items",
    utilityPrefix: "justify-items",
    valueMap,
    variantKey: "justifyItems",
  });
}
