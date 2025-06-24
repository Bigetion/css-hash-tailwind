import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generates CSS utility classes for saturate and backdrop-saturate effects
 * These utilities control the color saturation filter applied to elements
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for saturate and backdrop-saturate utilities
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { saturate = {} } = theme;

  // Create a new object for the values with properly formatted keys and values
  const formattedValues = {};
  Object.entries(saturate).forEach(([key, value]) => {
    // Use an empty string as the key for "default" to create a class without suffix
    // For all other keys, add a leading hyphen
    const formattedKey = key.toLowerCase() === "default" ? "" : `-${key}`;
    formattedValues[formattedKey] = value;
  });

  // Generate saturate utilities
  const saturateUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "--saturate",
    utilityPrefix: "saturate",
    valueMap: formattedValues,
    variantKey: "saturate",
    useHyphen: false, // Don't add a hyphen between prefix and key since keys already have it when needed
    transformValue: (value) => `saturate(${value}) !important`, // Transform and add !important
  });

  // Generate backdrop-saturate utilities
  const backdropSaturateUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "--backdrop-saturate",
    utilityPrefix: "backdrop-saturate",
    valueMap: formattedValues,
    variantKey: "saturate",
    useHyphen: false, // Don't add a hyphen between prefix and key since keys already have it when needed
    transformValue: (value) => `saturate(${value}) !important`, // Transform and add !important
  });

  return saturateUtilities + "\n" + backdropSaturateUtilities;
}
