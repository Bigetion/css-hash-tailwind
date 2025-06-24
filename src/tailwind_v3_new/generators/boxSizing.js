import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate box-sizing utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Define the value map for box-sizing options
  const valueMap = {
    border: "border-box",
    content: "content-box",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "box-sizing",
    utilityPrefix: "box",
    valueMap,
    variantKey: "boxSizing",
  });
}
