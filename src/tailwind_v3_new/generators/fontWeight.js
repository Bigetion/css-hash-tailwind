import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate font-weight utility classes
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { fontWeight = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "font-weight",
    utilityPrefix: "font",
    valueMap: fontWeight,
    variantKey: "fontWeight",
  });
}
