import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generates CSS utility classes for blur and backdrop-blur effects
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for blur and backdrop-blur utilities
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { blur = {} } = theme;

  // Create a new object for the values with properly formatted keys and values
  const formattedValues = {};
  Object.entries(blur).forEach(([key, value]) => {
    // Use an empty string as the key for "default" to create a class without suffix
    // For all other keys, add a leading hyphen
    const formattedKey = key.toLowerCase() === "default" ? "" : `-${key}`;
    formattedValues[formattedKey] = `blur(${value})`;
  });

  // Generate blur utilities
  const blurUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "--blur",
    utilityPrefix: "blur",
    valueMap: formattedValues,
    variantKey: "blur",
    useHyphen: false, // Don't add a hyphen between prefix and key since keys already have it when needed
    transformValue: (value) => `${value} !important`, // Add !important to each value
  });

  // Generate backdrop-blur utilities
  const backdropBlurUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "--backdrop-blur",
    utilityPrefix: "backdrop-blur",
    valueMap: formattedValues,
    variantKey: "blur",
    useHyphen: false, // Don't add a hyphen between prefix and key since keys already have it when needed
    transformValue: (value) => `${value} !important`, // Add !important to each value
  });

  return blurUtilities + backdropBlurUtilities;
}
