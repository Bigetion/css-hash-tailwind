import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate overscroll-behavior utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Create value map for overscroll-behavior options
  const valueMap = {
    auto: "auto",
    contain: "contain",
    none: "none",
  };

  // Helper function to generate overscroll utilities for a specific direction
  const generateOverscrollUtilities = (direction = null) => {
    const directionSuffix = direction ? `-${direction}` : "";
    const propertySuffix = direction ? `-${direction}` : "";

    return generateSimpleUtility({
      configOptions,
      cssProperty: `overscroll-behavior${propertySuffix}`,
      utilityPrefix: `overscroll${directionSuffix}`,
      valueMap,
      variantKey: "overscrollBehavior",
    });
  };

  // Generate standard overscroll-behavior utilities
  const overscrollCSS = generateOverscrollUtilities();

  // Generate overscroll-behavior-x utilities
  const overscrollXCSS = generateOverscrollUtilities("x");

  // Generate overscroll-behavior-y utilities
  const overscrollYCSS = generateOverscrollUtilities("y");

  // Combine all CSS strings
  return overscrollCSS + overscrollXCSS + overscrollYCSS;
}
