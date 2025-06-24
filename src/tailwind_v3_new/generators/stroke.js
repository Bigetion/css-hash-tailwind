import {
  generateColorUtility,
  generateSimpleUtility,
} from "./utils/generatorUtils";

/**
 * Generate stroke utility classes for SVG elements
 * Controls the color of the SVG stroke attribute with support for opacity
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { stroke = {}, opacity = {} } = theme;

  // Generate stroke color utilities with opacity support
  const colorUtilities = generateColorUtility({
    configOptions,
    cssProperty: "stroke",
    utilityPrefix: "stroke",
    colorMap: stroke,
    variantKey: "stroke",
    opacityVar: "--stroke-opacity",
  });

  // Generate stroke-opacity utilities for controlling opacity independently
  const opacityUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "--stroke-opacity",
    utilityPrefix: "stroke-opacity",
    valueMap: opacity,
    variantKey: "stroke",
  });

  // Combine both utility sets
  return colorUtilities + "\n" + opacityUtilities;
}
