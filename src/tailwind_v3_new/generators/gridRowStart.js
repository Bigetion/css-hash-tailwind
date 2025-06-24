import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate grid-row-start utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { gridRowStart = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "grid-row-start",
    utilityPrefix: "row-start",
    valueMap: gridRowStart,
    variantKey: "gridRowStart",
  });
}
