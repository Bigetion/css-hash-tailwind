import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate ring offset width utilities
 * Sets a CSS custom property (--ring-offset-width) used for controlling the offset of focus rings
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { ringOffsetWidth = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "--ring-offset-width",
    utilityPrefix: "ring-offset",
    valueMap: ringOffsetWidth,
    variantKey: "ringOffsetWidth",
  });
}
