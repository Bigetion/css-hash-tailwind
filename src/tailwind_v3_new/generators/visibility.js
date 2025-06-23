import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate visibility utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Create a value map for visibility options
  const valueMap = {
    visible: "visible",
    collapse: "collapse",
    invisible: "hidden",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "visibility",
    utilityPrefix: "", // Empty prefix since visibility classes don't use a prefix
    valueMap,
    variantKey: "visibility",
    useHyphen: false, // Don't use hyphen between prefix and key
  });
}
