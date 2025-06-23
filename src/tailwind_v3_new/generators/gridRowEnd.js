import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate grid-row-end utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { gridRowEnd = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "grid-row-end",
    utilityPrefix: "row-end",
    valueMap: gridRowEnd,
    variantKey: "gridRowEnd",
  });
}
