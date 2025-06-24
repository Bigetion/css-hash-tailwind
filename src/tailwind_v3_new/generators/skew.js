import { generateNegativeSupportedUtility } from "./utils/generatorUtils";

/**
 * Generate skew transform utility classes
 * Controls the skewing of elements with support for both positive and negative values
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {}, prefix: globalPrefix } = configOptions;
  const { skew = {} } = theme;

  // Generate skew-x utilities
  const skewXUtilities = generateNegativeSupportedUtility({
    configOptions,
    cssProperty: "--transform-skew-x",
    utilityPrefix: "skew-x",
    negativePrefix: `${globalPrefix}-skew-x`,
    valueMap: skew,
    variantKey: "skew",
    transformValue: (value) => `${value} !important`,
  });

  // Generate skew-y utilities
  const skewYUtilities = generateNegativeSupportedUtility({
    configOptions,
    cssProperty: "--transform-skew-y",
    utilityPrefix: "skew-y",
    negativePrefix: `${globalPrefix}-skew-y`,
    valueMap: skew,
    variantKey: "skew",
    transformValue: (value) => `${value} !important`,
  });

  // Combine all utilities
  return skewXUtilities + "\n" + skewYUtilities;
}
