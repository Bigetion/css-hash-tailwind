import { generateSimpleUtility } from "../utils/generator";

/**
 * Generates CSS utility classes for text wrap
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for text-wrap utilities
 */
export default function generator(configOptions = {}) {
  const propertyOptions = {
    wrap: "wrap",
    nowrap: "nowrap",
    balance: "balance",
    pretty: "pretty",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "text-wrap",
    utilityPrefix: "text",
    valueMap: propertyOptions,
    variantKey: "textDecoration", // Using the same variant key as the original implementation
  });
}
