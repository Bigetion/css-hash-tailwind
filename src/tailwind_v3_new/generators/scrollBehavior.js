import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate scroll behavior utility classes
 * Controls the scrolling behavior of an element
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Define the values map from array of options
  const scrollBehaviorValues = {
    auto: "auto",
    smooth: "smooth",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "scroll-behavior",
    utilityPrefix: "scroll",
    valueMap: scrollBehaviorValues,
    variantKey: "scrollBehavior",
  });
}
