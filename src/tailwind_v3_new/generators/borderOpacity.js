import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate border opacity utilities
 * Sets a CSS custom property (--border-opacity) that's used by border-color utilities
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { borderOpacity = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "--border-opacity", // Using CSS custom property
    utilityPrefix: "border-opacity",
    valueMap: borderOpacity,
    variantKey: "borderOpacity",
  });
}
