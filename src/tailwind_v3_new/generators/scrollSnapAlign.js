import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate scroll-snap-align utility classes
 * Controls how a scroll container's elements are aligned within its container
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const scrollSnapAlignValues = {
    start: "start",
    end: "end",
    center: "center",
    "align-none": "none",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "scroll-snap-align",
    utilityPrefix: "snap",
    valueMap: scrollSnapAlignValues,
    variantKey: "scrollSnapAlign",
  });
}
