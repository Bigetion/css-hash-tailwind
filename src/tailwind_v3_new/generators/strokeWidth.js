import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate stroke-width utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { strokeWidth = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "stroke-width",
    utilityPrefix: "stroke",
    valueMap: strokeWidth,
    variantKey: "strokeWidth",
  });
}
