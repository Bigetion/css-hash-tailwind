import { generateDirectionalUtility } from "./utils/generatorUtils";

/**
 * Generate scroll-margin utility classes
 * Controls the scroll snap margin of an element with directional variants
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { scrollMargin = {} } = theme;

  return generateDirectionalUtility({
    configOptions,
    cssProperty: "scroll-margin",
    utilityPrefix: "scroll-m",
    valueMap: scrollMargin,
    variantKey: "scrollMargin",
    supportNegative: true,
  });
}
