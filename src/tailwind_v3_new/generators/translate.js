import { generateNegativeSupportedUtility } from "../utils/generator";

/**
 * Generate translate transform utility classes
 * Controls the translation of elements with support for both positive and negative values
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {}, prefix: globalPrefix } = configOptions;
  const { translate = {} } = theme;

  // Generate translate-x utilities
  const translateXUtilities = generateNegativeSupportedUtility({
    configOptions,
    cssProperty: "--transform-translate-x",
    utilityPrefix: "translate-x",
    negativePrefix: `${globalPrefix}-translate-x`,
    valueMap: translate,
    variantKey: "translate",
    transformValue: (value) => `${value} !important`,
  });

  // Generate translate-y utilities
  const translateYUtilities = generateNegativeSupportedUtility({
    configOptions,
    cssProperty: "--transform-translate-y",
    utilityPrefix: "translate-y",
    negativePrefix: `${globalPrefix}-translate-y`,
    valueMap: translate,
    variantKey: "translate",
    transformValue: (value) => `${value} !important`,
  });

  // Combine all utilities
  return translateXUtilities + "\n" + translateYUtilities;
}
