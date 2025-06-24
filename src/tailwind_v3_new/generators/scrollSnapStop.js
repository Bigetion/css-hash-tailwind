import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate scroll-snap-stop utility classes
 * Controls whether the scroll container is allowed to "pass over"
 * possible snap positions
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Convert array to object mapping for generateSimpleUtility
  const scrollSnapStopValues = {
    normal: "normal",
    always: "always",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "scroll-snap-stop",
    utilityPrefix: "snap",
    valueMap: scrollSnapStopValues,
    variantKey: "scrollSnapStop",
  });
}
