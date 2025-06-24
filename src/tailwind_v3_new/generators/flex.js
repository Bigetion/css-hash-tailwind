import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate flex utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { flex = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "flex",
    utilityPrefix: "flex",
    valueMap: flex,
    variantKey: "flex",
  });
}
