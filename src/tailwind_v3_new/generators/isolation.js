import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate isolation utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Create a value map for isolation options
  const valueMap = {
    isolate: "isolate",
    "isolation-auto": "auto", // Fixed value from "no-repeat" to "auto"
  };

  // Note: This utility doesn't use a prefix like "isolation-",
  // it uses the exact class names "isolate" and "isolation-auto"
  return generateSimpleUtility({
    configOptions,
    cssProperty: "isolation",
    utilityPrefix: "", // Empty prefix because classes don't use common prefix
    valueMap,
    variantKey: "isolation",
  });
}
