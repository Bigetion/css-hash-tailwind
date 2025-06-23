import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate grid-auto-columns utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { gridAutoColumns = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "grid-auto-columns",
    utilityPrefix: "auto-cols",
    valueMap: gridAutoColumns,
    variantKey: "gridAutoColumns",
  });
}
