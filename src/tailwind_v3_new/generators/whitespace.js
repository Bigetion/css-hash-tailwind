import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generates CSS utility classes for white-space property
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for white-space utilities
 */
export default function generator(configOptions = {}) {
  // Map property values as object with key-value pairs
  // Note: Fixed duplicate "nowrap" from the original array
  const propertyOptions = {
    normal: "normal",
    nowrap: "nowrap",
    pre: "pre",
    "pre-line": "pre-line",
    "pre-wrap": "pre-wrap",
    "break-spaces": "break-spaces",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "white-space",
    utilityPrefix: "whitespace",
    valueMap: propertyOptions,
    variantKey: "whitespace",
  });
}
