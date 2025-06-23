import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate gap utility classes for gap, column-gap, and row-gap
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { gap = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "gap",
    utilityPrefix: "gap",
    valueMap: gap,
    variantKey: "gap",
    propertyVariants: [
      { suffix: "x", property: "column-gap" },
      { suffix: "y", property: "row-gap" },
    ],
  });
}
