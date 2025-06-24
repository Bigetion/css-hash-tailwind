import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generates CSS utility classes for text decoration thickness
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for text-decoration-thickness utilities
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { textDecorationThickness = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "text-decoration-thickness",
    utilityPrefix: "decoration",
    valueMap: textDecorationThickness,
    variantKey: "textDecorationThickness",
  });
}
