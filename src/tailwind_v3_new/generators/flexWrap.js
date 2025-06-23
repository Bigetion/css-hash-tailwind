import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate flex-wrap utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Define the flex-wrap values directly in the generator
  // Like flexDirection, these values are hardcoded rather than from theme
  const valueMap = {
    wrap: "wrap",
    "wrap-reverse": "wrap-reverse",
    "no-wrap": "nowrap",
    nowrap: "nowrap", // Provides both flex-nowrap and flex-no-wrap options
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "flex-wrap",
    utilityPrefix: "flex", // The prefix is "flex" (e.g., flex-wrap, flex-nowrap)
    valueMap,
    variantKey: "flexWrap",
  });
}
