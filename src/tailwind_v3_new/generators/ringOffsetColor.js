import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate ring offset color utilities
 * Sets a CSS custom property (--ring-offset-color) used for controlling the color of focus ring offsets
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { ringOffsetColor = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "--ring-offset-color",
    utilityPrefix: "ring-offset",
    valueMap: ringOffsetColor,
    variantKey: "ringOffsetColor",
  });
}
