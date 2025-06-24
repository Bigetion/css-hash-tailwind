import {
  generateColorUtility,
  generateSimpleUtility,
} from "./utils/generatorUtils";

/**
 * Generates CSS utility classes for text-decoration-color with opacity support
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for text-decoration-color utilities and opacity
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { textDecorationColor = {}, opacity = {} } = theme;

  // Generate color utilities
  const colorUtilities = generateColorUtility({
    configOptions,
    cssProperty: "text-decoration-color",
    utilityPrefix: "decoration",
    colorMap: textDecorationColor,
    variantKey: "textDecorationColor",
    opacityVar: "--text-decoration-opacity",
  });

  // Generate opacity utilities
  const opacityUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "--text-decoration-opacity",
    utilityPrefix: "decoration-opacity",
    valueMap: opacity,
    variantKey: "opacity",
  });

  return colorUtilities + opacityUtilities;
}
