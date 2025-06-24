import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate grid-column-start utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { gridColumnStart = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "grid-column-start",
    utilityPrefix: "col-start",
    valueMap: gridColumnStart,
    variantKey: "gridColumnStart",
  });
}
