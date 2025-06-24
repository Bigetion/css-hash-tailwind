import { generateSimpleUtility } from "../utils/generator";

/**
 * Generates CSS utility classes for line heights
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for line-height utilities
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { lineHeight = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "line-height",
    utilityPrefix: "leading",
    valueMap: lineHeight,
    variantKey: "lineHeight",
  });
}
