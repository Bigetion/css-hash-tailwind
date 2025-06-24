import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generates CSS utility classes for background-position
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for background-position utilities
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { backgroundPosition = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "background-position",
    utilityPrefix: "bg",
    valueMap: backgroundPosition,
    variantKey: "backgroundPosition",
  });
}
