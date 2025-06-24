import { generateSimpleUtility } from "../utils/generator";

/**
 * Generates CSS utility classes for contrast and backdrop-contrast effects
 * These utilities control the contrast filter applied to elements
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for contrast and backdrop-contrast utilities
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { contrast = {} } = theme;

  // Create a new object for the values with properly formatted keys and values
  const formattedValues = {};
  Object.entries(contrast).forEach(([key, value]) => {
    // Use an empty string as the key for "default" to create a class without suffix
    // For all other keys, add a leading hyphen
    const formattedKey = key.toLowerCase() === "default" ? "" : `-${key}`;
    formattedValues[formattedKey] = value;
  });

  // Generate contrast utilities
  const contrastUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "--contrast",
    utilityPrefix: "contrast",
    valueMap: formattedValues,
    variantKey: "contrast",
    useHyphen: false, // Don't add a hyphen between prefix and key since keys already have it when needed
    transformValue: (value) => `contrast(${value}) !important`, // Transform and add !important
  });

  // Generate backdrop-contrast utilities
  const backdropContrastUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "--backdrop-contrast",
    utilityPrefix: "backdrop-contrast",
    valueMap: formattedValues,
    variantKey: "contrast",
    useHyphen: false, // Don't add a hyphen between prefix and key since keys already have it when needed
    transformValue: (value) => `contrast(${value}) !important`, // Transform and add !important
  });

  return contrastUtilities + "\n" + backdropContrastUtilities;
}
