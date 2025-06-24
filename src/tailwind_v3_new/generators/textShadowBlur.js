import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generates CSS utility classes for text-shadow-blur custom property
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for text-shadow-blur utilities
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { textShadowBlur = {} } = theme;

  // Create a new object for the values with properly formatted keys
  const formattedValues = {};
  Object.entries(textShadowBlur).forEach(([key, value]) => {
    // Use an empty string as the key for "default" to create a class without suffix
    // For all other keys, add a leading hyphen
    const formattedKey = key.toLowerCase() === "default" ? "" : `-${key}`;
    formattedValues[formattedKey] = value;
  });

  return generateSimpleUtility({
    configOptions,
    cssProperty: "--text-shadow-blur",
    utilityPrefix: "text-shadow-blur",
    valueMap: formattedValues,
    variantKey: "textShadowBlur",
    useHyphen: false, // Don't add a hyphen between prefix and key since keys already have it when needed
  });
}
