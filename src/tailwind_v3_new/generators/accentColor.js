import {
  generateColorUtility,
  generateSimpleUtility,
} from "./utils/generatorUtils";

/**
 * Generate accent-color utility classes with opacity support
 * Controls the color of accent elements like checkboxes and radio buttons
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { accentColor = {}, opacity = {} } = theme;

  // Generate the accent color utilities
  const colorUtilities = generateColorUtility({
    configOptions,
    cssProperty: "accent-color",
    utilityPrefix: "accent",
    colorMap: accentColor,
    variantKey: "accentColor",
    opacityVar: "--accent-opacity",
  });

  // Generate opacity utilities for accent colors
  const opacityUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "--accent-opacity",
    utilityPrefix: "accent-opacity",
    valueMap: opacity,
    variantKey: "accentColor",
  });

  // Combine both utility sets
  return colorUtilities + "\n" + opacityUtilities;
}
