import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generates CSS utility classes for text-shadow-opacity custom property
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for text-shadow-opacity utilities
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { textShadowOpacity = {} } = theme;

  // Create a new object for the values with properly formatted keys
  const formattedValues = {};
  Object.entries(textShadowOpacity).forEach(([key, value]) => {
    // Use an empty string as the key for "default" to create a class without suffix
    // For all other keys, add a leading hyphen
    const formattedKey = key.toLowerCase() === "default" ? "" : `-${key}`;
    formattedValues[formattedKey] = value;
  });

  return generateSimpleUtility({
    configOptions,
    cssProperty: "--text-shadow-opacity",
    utilityPrefix: "text-shadow-opacity",
    valueMap: formattedValues,
    variantKey: "textShadowOpacity",
    useHyphen: false, // Don't add a hyphen between prefix and key since keys already have it when needed
  });
}
