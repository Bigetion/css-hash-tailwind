import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate letter-spacing utility classes
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { letterSpacing = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "letter-spacing",
    utilityPrefix: "tracking",
    valueMap: letterSpacing,
    variantKey: "letterSpacing",
  });
}
