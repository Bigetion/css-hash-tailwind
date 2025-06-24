import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate grid-column-end utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { gridColumnEnd = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "grid-column-end",
    utilityPrefix: "col-end",
    valueMap: gridColumnEnd,
    variantKey: "gridColumnEnd",
  });
}
