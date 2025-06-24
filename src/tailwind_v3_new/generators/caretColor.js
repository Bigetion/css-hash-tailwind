import {
  generateColorUtility,
  generateSimpleUtility,
} from "./utils/generatorUtils";

/**
 * Generate caret-color utility classes with opacity support
 * Controls the color of the text input cursor (caret)
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { caretColor = {}, opacity = {} } = theme;

  // Generate the caret color utilities
  const colorUtilities = generateColorUtility({
    configOptions,
    cssProperty: "caret-color",
    utilityPrefix: "caret",
    colorMap: caretColor,
    variantKey: "caretColor",
    opacityVar: "--caret-opacity",
  });

  // Generate opacity utilities for caret colors
  const opacityUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "--caret-opacity",
    utilityPrefix: "caret-opacity",
    valueMap: opacity,
    variantKey: "caretColor",
  });

  // Combine both utility sets
  return colorUtilities + "\n" + opacityUtilities;
}
