import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate max-height utility classes
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { maxHeight = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "max-height",
    utilityPrefix: "max-h",
    valueMap: maxHeight,
    variantKey: "maxHeight",
  });
}
