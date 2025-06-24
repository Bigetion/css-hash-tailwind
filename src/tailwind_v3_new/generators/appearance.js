import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate appearance utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Convert the property options array to a value map object
  const valueMap = {
    auto: "auto",
    none: "none",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "appearance",
    utilityPrefix: "appearance",
    valueMap,
    variantKey: "appearance",
  });
}
