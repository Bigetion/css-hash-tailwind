import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate min-width utility classes
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { minWidth = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "min-width",
    utilityPrefix: "min-w",
    valueMap: minWidth,
    variantKey: "minWidth",
  });
}
