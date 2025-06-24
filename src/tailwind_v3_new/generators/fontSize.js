import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate font-size utility classes
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { fontSize = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "font-size",
    utilityPrefix: "text",
    valueMap: fontSize,
    variantKey: "fontSize",
  });
}
