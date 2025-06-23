import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate max-width utility classes
 * 
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { maxWidth = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "max-width",
    utilityPrefix: "max-w",
    valueMap: maxWidth,
    variantKey: "maxWidth"
  });
}
