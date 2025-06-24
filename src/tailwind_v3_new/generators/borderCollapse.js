import { generateSimpleUtility } from "../utils/generator";

/**
 * Generates CSS utility classes for border-collapse
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for border-collapse utilities
 */
export default function generator(configOptions = {}) {
  // Map property values as object with key-value pairs
  const propertyOptions = {
    collapse: "collapse",
    separate: "separate",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "border-collapse",
    utilityPrefix: "border",
    valueMap: propertyOptions,
    variantKey: "borderCollapse",
  });
}
