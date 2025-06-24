import { generateSimpleUtility } from "../utils/generator";

/**
 * Generates CSS utility classes for list style position
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for list-style-position utilities
 */
export default function generator(configOptions = {}) {
  const propertyOptions = {
    inside: "inside",
    outside: "outside",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "list-style-position",
    utilityPrefix: "list",
    valueMap: propertyOptions,
    variantKey: "listStylePosition",
  });
}
