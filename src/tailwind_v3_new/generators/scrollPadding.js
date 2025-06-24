import { generateDirectionalUtility } from "../utils/generator";

/**
 * Generate scroll-padding utility classes
 * Controls the scroll snap padding of an element with directional variants
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { scrollPadding = {} } = theme;

  return generateDirectionalUtility({
    configOptions,
    cssProperty: "scroll-padding",
    utilityPrefix: "scroll-p",
    valueMap: scrollPadding,
    variantKey: "scrollPadding",
    supportNegative: true,
  });
}
