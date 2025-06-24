import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate align-content utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const valueMap = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "align-content",
    utilityPrefix: "content", // Using "content" prefix instead of "align-content" following Tailwind's convention
    valueMap,
    variantKey: "alignContent",
  });
}
