import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate ring opacity utilities
 * Sets a CSS custom property (--ring-opacity) that's used by ring-color utilities
 * Controls the opacity of focus rings
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { ringOpacity = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "--ring-opacity",
    utilityPrefix: "ring-opacity",
    valueMap: ringOpacity,
    variantKey: "ringOpacity",
  });
}
