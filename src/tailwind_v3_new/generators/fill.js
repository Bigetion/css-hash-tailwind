import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate fill utilities for SVG elements
 * Sets the fill color for SVG elements
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { fill = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "fill",
    utilityPrefix: "fill",
    valueMap: fill,
    variantKey: "textColor", // Using textColor variants as in the original implementation
  });
}
