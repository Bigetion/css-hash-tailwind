import { generateSimpleUtility } from "../utils/generator";

/**
 * Generates CSS utility classes for background-size
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for background-size utilities
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { backgroundSize = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "background-size",
    utilityPrefix: "bg",
    valueMap: backgroundSize,
    variantKey: "backgroundSize",
  });
}
