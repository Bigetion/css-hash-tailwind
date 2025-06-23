import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate align-items utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const propertyOptions = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    baseline: "baseline",
    stretch: "stretch",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "align-items",
    utilityPrefix: "items",
    valueMap: propertyOptions,
    variantKey: "alignItems"
  });
}
