import { generateSimpleUtility } from "../utils/generator";

/**
 * Generates CSS utility classes for invert and backdrop-invert effects
 * These utilities control the inversion filter applied to elements
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for invert and backdrop-invert utilities
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { invert = {} } = theme;

  // Create a new object for the values with properly formatted keys and values
  const formattedValues = {};
  Object.entries(invert).forEach(([key, value]) => {
    // Use an empty string as the key for "default" to create a class without suffix
    // For all other keys, add a leading hyphen
    const formattedKey = key.toLowerCase() === "default" ? "" : `-${key}`;
    formattedValues[formattedKey] = value;
  });

  // Generate invert utilities
  const invertUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "--invert",
    utilityPrefix: "invert",
    valueMap: formattedValues,
    variantKey: "invert",
    useHyphen: false, // Don't add a hyphen between prefix and key since keys already have it when needed
    transformValue: (value) => `invert(${value}) !important`, // Transform and add !important
  });

  // Generate backdrop-invert utilities
  const backdropInvertUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "--backdrop-invert",
    utilityPrefix: "backdrop-invert",
    valueMap: formattedValues,
    variantKey: "invert",
    useHyphen: false, // Don't add a hyphen between prefix and key since keys already have it when needed
    transformValue: (value) => `invert(${value}) !important`, // Transform and add !important
  });

  return invertUtilities + "\n" + backdropInvertUtilities;
}
