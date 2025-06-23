import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate order utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { order = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "order",
    utilityPrefix: "order",
    valueMap: order,
    variantKey: "order",
  });
}
