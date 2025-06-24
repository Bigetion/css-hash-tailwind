import { generateNegativeSupportedUtility } from "../utils/generator";

/**
 * Generate rotate transform utility classes
 * Controls the rotation of elements with support for both positive and negative values
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { rotate = {} } = theme;

  // Since rotation has negative values, we'll use the special utility function
  // that handles negative values properly
  return generateNegativeSupportedUtility({
    configOptions,
    cssProperty: "--transform-rotate",
    utilityPrefix: "rotate",
    negativePrefix: "-rotate", // Special prefix used for negative values
    valueMap: rotate,
    variantKey: "rotate",
    transformValue: (value) => `${value} !important`, // Add !important to all values
  });
}
