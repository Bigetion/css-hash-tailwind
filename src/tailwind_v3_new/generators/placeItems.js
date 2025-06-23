import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate place-items utility classes
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
    cssProperty: "place-items",
    utilityPrefix: "place-items",
    valueMap,
    variantKey: "placeItems",
  });
}
