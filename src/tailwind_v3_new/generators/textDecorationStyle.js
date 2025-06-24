import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generates CSS utility classes for text decoration style
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for text-decoration-style utilities
 */
export default function generator(configOptions = {}) {
  const propertyOptions = {
    solid: "solid",
    double: "double",
    dotted: "dotted",
    dashed: "dashed",
    wavy: "wavy",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "text-decoration-style",
    utilityPrefix: "decoration",
    valueMap: propertyOptions,
    variantKey: "textDecorationStyle",
  });
}
