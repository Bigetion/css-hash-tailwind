import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generates CSS utility classes for background-repeat
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for background-repeat utilities
 */
export default function generator(configOptions = {}) {
  const propertyOptions = {
    repeat: "repeat",
    "no-repeat": "no-repeat",
    "repeat-x": "repeat-x",
    "repeat-y": "repeat-y",
    "repeat-round": "round",
    "repeat-space": "space",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "background-repeat",
    utilityPrefix: "bg",
    valueMap: propertyOptions,
    variantKey: "backgroundRepeat",
  });
}
