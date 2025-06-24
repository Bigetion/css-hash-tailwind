import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate outline width utilities
 * Sets the outline-width CSS property to control the thickness of an element's outline
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { outlineWidth = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "outline-width",
    utilityPrefix: "outline",
    valueMap: outlineWidth,
    variantKey: "outlineWidth",
  });
}
