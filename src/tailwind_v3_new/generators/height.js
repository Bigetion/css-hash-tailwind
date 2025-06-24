import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate height utility classes
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { height = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "height",
    utilityPrefix: "h",
    valueMap: height,
    variantKey: "height",
  });
}
