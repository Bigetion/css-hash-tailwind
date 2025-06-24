import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generates CSS utility classes for text underline offset
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for text-underline-offset utilities
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { textUnderlineOffset = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "text-underline-offset",
    utilityPrefix: "underline-offset",
    valueMap: textUnderlineOffset,
    variantKey: "textUnderlineOffset",
  });
}
