import { generateDirectionalUtility } from "./utils/generatorUtils";

/**
 * Generate padding utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { padding = {} } = theme;

  return generateDirectionalUtility({
    configOptions,
    cssProperty: "padding",
    utilityPrefix: "p",
    valueMap: padding,
    variantKey: "padding",
    supportNegative: false
  });
}
