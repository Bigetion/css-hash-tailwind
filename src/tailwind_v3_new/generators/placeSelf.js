import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate place-self utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Convert the property options array to a value map object
  const valueMap = {
    auto: "auto",
    start: "start",
    end: "end",
    center: "center",
    stretch: "stretch",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "place-self",
    utilityPrefix: "place-self",
    valueMap,
    variantKey: "placeSelf",
  });
}
