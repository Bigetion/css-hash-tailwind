import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate outline opacity utilities
 * Sets a CSS custom property (--outline-opacity) that's used by outline-color utilities
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { outlineOpacity = {} } = theme;

  // The generateSimpleUtility function will handle the default case correctly
  return generateSimpleUtility({
    configOptions,
    cssProperty: "--outline-opacity", // Using CSS custom property
    utilityPrefix: "outline-opacity",
    valueMap: outlineOpacity,
    variantKey: "outlineOpacity",
  });
}
