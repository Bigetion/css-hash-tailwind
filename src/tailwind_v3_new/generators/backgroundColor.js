import { generateColorUtility } from "./utils/generatorUtils";

/**
 * Generate background-color utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { backgroundColor = {} } = theme;

  return generateColorUtility({
    configOptions,
    cssProperty: "background-color",
    utilityPrefix: "bg",
    colorMap: backgroundColor,
    variantKey: "backgroundColor",
    opacityVar: "--bg-opacity",
  });
}
