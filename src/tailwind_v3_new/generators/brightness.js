import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generates CSS utility classes for brightness and backdrop-brightness effects
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for brightness and backdrop-brightness utilities
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { brightness = {} } = theme;

  // Create a new object for the values with properly formatted keys and values
  const formattedValues = {};
  Object.entries(brightness).forEach(([key, value]) => {
    // Use an empty string as the key for "default" to create a class without suffix
    // For all other keys, add a leading hyphen
    const formattedKey = key.toLowerCase() === "default" ? "" : `-${key}`;
    formattedValues[formattedKey] = value;
  });

  // Generate brightness utilities
  const brightnessUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "--brightness",
    utilityPrefix: "brightness",
    valueMap: formattedValues,
    variantKey: "brightness",
    useHyphen: false, // Don't add a hyphen between prefix and key since keys already have it when needed
    transformValue: (value) => `brightness(${value}) !important`, // Transform and add !important
  });

  // Generate backdrop-brightness utilities
  const backdropBrightnessUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "--backdrop-brightness",
    utilityPrefix: "backdrop-brightness",
    valueMap: formattedValues,
    variantKey: "brightness",
    useHyphen: false, // Don't add a hyphen between prefix and key since keys already have it when needed
    transformValue: (value) => `brightness(${value}) !important`, // Transform and add !important
  });

  return brightnessUtilities + "\n" + backdropBrightnessUtilities;
}
