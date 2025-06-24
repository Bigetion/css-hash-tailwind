import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate scale transform utility classes
 * Controls the scaling of elements with both unified and directional (x/y) variants
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { scale = {} } = theme;

  // Generate standard scale utilities (affects both X and Y)
  const scaleUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: ["--transform-scale-x", "--transform-scale-y"],
    utilityPrefix: "scale",
    valueMap: scale,
    variantKey: "scale",
    transformValue: (value) => `${value} !important`,
  });

  // Generate scale-x utilities
  const scaleXUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "--transform-scale-x",
    utilityPrefix: "scale-x",
    valueMap: scale,
    variantKey: "scale",
    transformValue: (value) => `${value} !important`,
  });

  // Generate scale-y utilities
  const scaleYUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "--transform-scale-y",
    utilityPrefix: "scale-y",
    valueMap: scale,
    variantKey: "scale",
    transformValue: (value) => `${value} !important`,
  });

  // Combine all the utilities
  return scaleUtilities + "\n" + scaleXUtilities + "\n" + scaleYUtilities;
}
