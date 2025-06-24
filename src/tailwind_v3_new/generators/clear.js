import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate clear utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Create a value map for clear options
  const valueMap = {
    start: "inline-start",
    end: "inline-end",
    left: "left",
    right: "right",
    both: "both",
    none: "none",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "clear",
    utilityPrefix: "clear",
    valueMap,
    variantKey: "clear",
  });
}
