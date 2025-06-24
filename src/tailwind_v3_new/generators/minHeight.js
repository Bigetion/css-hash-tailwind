import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate min-height utility classes
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { minHeight = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "min-height",
    utilityPrefix: "min-h",
    valueMap: minHeight,
    variantKey: "minHeight",
  });
}
