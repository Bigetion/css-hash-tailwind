import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate justify-content utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const propertyOptions = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "justify-content",
    utilityPrefix: "justify",
    valueMap: propertyOptions,
    variantKey: "justifyContent",
  });
}
