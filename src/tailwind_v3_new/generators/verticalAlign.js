import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generates CSS utility classes for vertical-align property
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for vertical-align utilities
 */
export default function generator(configOptions = {}) {
  // Map property values as object with key-value pairs
  const propertyOptions = {
    baseline: "baseline",
    top: "top",
    middle: "middle",
    bottom: "bottom",
    "text-top": "text-top",
    "text-bottom": "text-bottom",
    "text-sub": "text-sub",
    "text-super": "text-super",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "vertical-align",
    utilityPrefix: "align",
    valueMap: propertyOptions,
    variantKey: "verticalAlign",
  });
}
