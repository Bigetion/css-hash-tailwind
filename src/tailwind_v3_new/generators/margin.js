import { generateDirectionalUtility } from "../utils/generator";

/**
 * Generate margin utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { margin = {} } = theme;

  return generateDirectionalUtility({
    configOptions,
    cssProperty: "margin",
    utilityPrefix: "m",
    valueMap: margin,
    variantKey: "margin",
    supportNegative: true,
  });
}
