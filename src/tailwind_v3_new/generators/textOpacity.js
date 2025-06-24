import { generateSimpleUtility } from "../utils/generator";

/**
 * Generates CSS utility classes for text opacity
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for text-opacity utilities
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { textOpacity = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "--text-opacity",
    utilityPrefix: "text-opacity",
    valueMap: textOpacity,
    variantKey: "textOpacity",
  });
}
