import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate justify-self utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Create a value map from the array of property options
  const valueMap = {
    auto: "auto",
    start: "start",
    end: "end",
    center: "center",
    stretch: "stretch",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "justify-self",
    utilityPrefix: "justify-self",
    valueMap,
    variantKey: "justifySelf",
  });
}
