import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate mix-blend-mode and background-blend-mode utilities
 * Creates utilities for controlling how an element's content blends with its background and how an element's background layers blend
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Define the blend mode values
  const blendModes = {
    normal: "normal",
    multiply: "multiply",
    screen: "screen",
    overlay: "overlay",
    darken: "darken",
    lighten: "lighten",
    "color-dodge": "color-dodge",
    "color-burn": "color-burn",
    "hard-light": "hard-light",
    "soft-light": "soft-light",
    difference: "difference",
    exclusion: "exclusion",
    hue: "hue",
    saturation: "saturation",
    color: "color",
    luminosity: "luminosity",
    "plus-lighter": "plus-lighter",
  };

  // Generate mix-blend-mode utilities
  const mixBlendModeUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "mix-blend-mode",
    utilityPrefix: "mix-blend",
    valueMap: blendModes,
    variantKey: "mixBlendMode",
  });

  // Generate background-blend-mode utilities
  const backgroundBlendModeUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "background-blend-mode",
    utilityPrefix: "bg-blend",
    valueMap: blendModes,
    variantKey: "mixBlendMode",
  });

  // Combine both sets of utilities
  return mixBlendModeUtilities + "\n" + backgroundBlendModeUtilities;
}
