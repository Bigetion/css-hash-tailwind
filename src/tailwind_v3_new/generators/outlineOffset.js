import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate outline offset utilities
 * Sets the outline-offset CSS property to control distance between an outline and the edge of an element
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { outlineOffset = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "outline-offset",
    utilityPrefix: "outline-offset",
    valueMap: outlineOffset,
    variantKey: "outlineOffset",
  });
}
