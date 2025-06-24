import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate border style utilities
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Define the values for border styles
  const borderStyles = ["solid", "dashed", "dotted", "double", "none"].reduce(
    (acc, style) => {
      acc[style] = style;
      return acc;
    },
    {}
  );

  return generateSimpleUtility({
    configOptions,
    cssProperty: "border-style",
    utilityPrefix: "border",
    valueMap: borderStyles,
    variantKey: "borderStyle",
  });
}
