import { generateColorUtility } from "../utils/generator";

/**
 * Generate ring color utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { ringColor = {} } = theme;

  return generateColorUtility({
    configOptions,
    cssProperty: "--ring-color",
    utilityPrefix: "ring",
    colorMap: ringColor,
    variantKey: "ringColor",
    opacityVar: "--ring-opacity"
  });
}
