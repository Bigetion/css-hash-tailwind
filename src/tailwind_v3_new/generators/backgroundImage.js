import { generateSimpleUtility } from "../utils/generator";

/**
 * Generates CSS utility classes for background-image
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for background-image utilities
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { backgroundImage = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "background-image",
    utilityPrefix: "bg",
    valueMap: backgroundImage,
    variantKey: "backgroundImage",
  });
}
