import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate width utility classes
 * 
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { width = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "width",
    utilityPrefix: "w",
    valueMap: width,
    variantKey: "width"
  });
}
