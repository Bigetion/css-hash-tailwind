import { generateSimpleUtility } from "../utils/generator";

/**
 * Generates CSS utility classes for grayscale and backdrop-grayscale effects
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for grayscale and backdrop-grayscale utilities
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { grayscale = {} } = theme;

  // Create a new object for the values with properly formatted keys and values
  const formattedValues = {};
  Object.entries(grayscale).forEach(([key, value]) => {
    // Use an empty string as the key for "default" to create a class without suffix
    // For all other keys, add a leading hyphen
    const formattedKey = key.toLowerCase() === "default" ? "" : `-${key}`;
    formattedValues[formattedKey] = `grayscale(${value})`;
  });

  // Generate grayscale utilities
  const grayscaleUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "--grayscale",
    utilityPrefix: "grayscale",
    valueMap: formattedValues,
    variantKey: "grayscale",
    useHyphen: false, // Don't add a hyphen between prefix and key since keys already have it when needed
    transformValue: (value) => `${value} !important`, // Add !important to each value
  });

  // Generate backdrop-grayscale utilities
  const backdropGrayscaleUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "--backdrop-grayscale",
    utilityPrefix: "backdrop-grayscale",
    valueMap: formattedValues,
    variantKey: "grayscale",
    useHyphen: false, // Don't add a hyphen between prefix and key since keys already have it when needed
    transformValue: (value) => `${value} !important`, // Add !important to each value
  });

  // Combine all utilities
  return grayscaleUtilities + backdropGrayscaleUtilities;
}
