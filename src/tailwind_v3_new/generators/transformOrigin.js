import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate transform-origin utility classes
 * Controls the origin point for transformations
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Define the values map - here we need to map each key to itself
  // since our array only contains the values
  const originValues = {
    center: "center",
    top: "top",
    "top-right": "top-right",
    right: "right",
    "bottom-right": "bottom-right",
    bottom: "bottom",
    "bottom-left": "bottom-left",
    left: "left",
    "top-left": "top-left",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "transform-origin",
    utilityPrefix: "origin",
    valueMap: originValues,
    variantKey: "transformOrigin",
    transformValue: (value) => `${value.replace(/-/g, " ")} !important`,
  });
}
