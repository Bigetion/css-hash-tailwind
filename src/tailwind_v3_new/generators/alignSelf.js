import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate align-self utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const valueMap = {
    auto: "auto",
    start: "flex-start",
    end: "flex-end",
    center: "center",
    stretch: "stretch",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "align-self",
    utilityPrefix: "self",
    valueMap,
    variantKey: "alignSelf",
  });
}
