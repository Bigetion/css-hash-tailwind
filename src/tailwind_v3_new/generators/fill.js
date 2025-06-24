import {
  generateColorUtility,
  generateSimpleUtility,
} from "../utils/generator";

/**
 * Generate fill utilities for SVG elements
 * Sets the fill color for SVG elements with support for opacity
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { fill = {}, opacity = {} } = theme;

  // Generate fill color utilities with opacity support
  const colorUtilities = generateColorUtility({
    configOptions,
    cssProperty: "fill",
    utilityPrefix: "fill",
    colorMap: fill,
    variantKey: "fill",
    opacityVar: "--fill-opacity",
  });

  // Generate fill-opacity utilities for controlling opacity independently
  const opacityUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "--fill-opacity",
    utilityPrefix: "fill-opacity",
    valueMap: opacity,
    variantKey: "fill",
  });

  // Combine both utility sets
  return colorUtilities + "\n" + opacityUtilities;
}
