import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generates CSS utility classes for sepia and backdrop-sepia effects
 * These utilities control the sepia filter effect applied to elements
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for sepia and backdrop-sepia utilities
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { sepia = {} } = theme;

  // Create a new object for the values with properly formatted keys and values
  const formattedValues = {};
  Object.entries(sepia).forEach(([key, value]) => {
    // Use an empty string as the key for "default" to create a class without suffix
    // For all other keys, add a leading hyphen
    const formattedKey = key.toLowerCase() === "default" ? "" : `-${key}`;
    formattedValues[formattedKey] = value;
  });

  // Generate sepia utilities
  const sepiaUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "--sepia",
    utilityPrefix: "sepia",
    valueMap: formattedValues,
    variantKey: "sepia",
    useHyphen: false, // Don't add a hyphen between prefix and key since keys already have it when needed
    transformValue: (value) => `sepia(${value}) !important`, // Transform and add !important
  });

  // Generate backdrop-sepia utilities
  const backdropSepiaUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "--backdrop-sepia",
    utilityPrefix: "backdrop-sepia",
    valueMap: formattedValues,
    variantKey: "sepia",
    useHyphen: false, // Don't add a hyphen between prefix and key since keys already have it when needed
    transformValue: (value) => `sepia(${value}) !important`, // Transform and add !important
  });

  return sepiaUtilities + "\n" + backdropSepiaUtilities;
}
