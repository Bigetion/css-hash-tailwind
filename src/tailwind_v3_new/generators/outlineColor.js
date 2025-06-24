import { generateColorUtility } from "../utils/generator";

/**
 * Generate outline color utilities
 * Sets outline colors with opacity support via CSS variable
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { outlineColor = {} } = theme;

  // Filter out the 'default' key if present
  const filteredColors = Object.entries(outlineColor)
    .filter(([key]) => key.toLowerCase() !== "default")
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});

  return generateColorUtility({
    configOptions,
    cssProperty: "outline-color",
    utilityPrefix: "outline",
    colorMap: filteredColors,
    variantKey: "outlineColor",
    opacityVar: "--outline-opacity",
  });
}
