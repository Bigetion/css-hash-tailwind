import { generateColorUtility } from "./utils/generatorUtils";

/**
 * Generate text-color utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { textColor = {} } = theme;

  return generateColorUtility({
    configOptions,
    cssProperty: "color",
    utilityPrefix: "text",
    colorMap: textColor,
    variantKey: "textColor",
    opacityVar: "--text-opacity",
  });
}
