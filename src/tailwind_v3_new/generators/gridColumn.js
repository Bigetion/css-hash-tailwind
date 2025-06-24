import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate grid-column utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { gridColumn = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "grid-column",
    utilityPrefix: "col",
    valueMap: gridColumn,
    variantKey: "gridColumn",
  });
}
