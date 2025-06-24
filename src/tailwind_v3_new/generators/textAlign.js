import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generates CSS utility classes for text alignment
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for text-align utilities
 */
export default function generator(configOptions = {}) {
  const propertyOptions = {
    left: "left",
    center: "center",
    right: "right",
    justify: "justify",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "text-align",
    utilityPrefix: "text",
    valueMap: propertyOptions,
    variantKey: "textAlign",
  });
}
