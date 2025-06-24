import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate size utility classes that set both width and height to the same value
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { size = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: ["width", "height"], // Pass an array of properties
    utilityPrefix: "size",
    valueMap: size,
    variantKey: "size",
  });
}
