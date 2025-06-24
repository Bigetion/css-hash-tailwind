import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generates CSS utility classes for hyphens with vendor prefixes
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for hyphens utilities
 */
export default function generator(configOptions = {}) {
  // Map property values as object with key-value pairs
  const propertyOptions = {
    none: "none",
    manual: "manual",
    auto: "auto",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: ["-webkit-hyphens", "hyphens"], // Array of properties to set with the same value
    utilityPrefix: "hyphens",
    valueMap: propertyOptions,
    variantKey: "hyphens",
  });
}
