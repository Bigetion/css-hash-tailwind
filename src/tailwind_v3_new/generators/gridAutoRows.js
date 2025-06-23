import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate grid-auto-rows utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { gridAutoRows = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "grid-auto-rows",
    utilityPrefix: "auto-rows",
    valueMap: gridAutoRows,
    variantKey: "gridAutoRows",
  });
}
