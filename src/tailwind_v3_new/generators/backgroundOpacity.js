import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generates CSS utility classes for background opacity
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for background-opacity utilities
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { backgroundOpacity = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "--bg-opacity",
    utilityPrefix: "bg-opacity",
    valueMap: backgroundOpacity,
    variantKey: "backgroundOpacity",
  });
}
