import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate position utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Create a value map for position options
  const valueMap = {
    static: "static",
    fixed: "fixed",
    absolute: "absolute",
    relative: "relative",
    sticky: "sticky",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "position",
    utilityPrefix: "", // Empty prefix since we use the position value directly as class name
    valueMap,
    variantKey: "position",
    useHyphen: false, // Don't use hyphen between prefix and key for position
  });
}
