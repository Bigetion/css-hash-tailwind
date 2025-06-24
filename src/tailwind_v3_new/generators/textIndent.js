import { generateNegativeSupportedUtility } from "../utils/generator";

/**
 * Generates CSS utility classes for text-indent with support for negative values
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for text-indent utilities
 */
export default function generator(configOptions = {}) {
  const { theme = {}, prefix: globalPrefix } = configOptions;
  const { textIndent = {} } = theme;

  return generateNegativeSupportedUtility({
    configOptions,
    cssProperty: "text-indent",
    utilityPrefix: "indent",
    negativePrefix: `${globalPrefix}-indent`,
    valueMap: textIndent,
    variantKey: "textIndent",
  });
}
