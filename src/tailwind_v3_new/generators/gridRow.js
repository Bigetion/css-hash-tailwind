import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate grid-row utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { gridRow = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "grid-row",
    utilityPrefix: "row",
    valueMap: gridRow,
    variantKey: "gridRow",
  });
}
