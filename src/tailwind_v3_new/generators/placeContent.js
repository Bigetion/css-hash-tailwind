import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate place-content utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const valueMap = {
    start: "start",
    end: "end",
    center: "center",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
    stretch: "stretch",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "place-content",
    utilityPrefix: "place-content",
    valueMap,
    variantKey: "placeContent",
  });
}
