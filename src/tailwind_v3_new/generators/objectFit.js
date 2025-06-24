import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate object-fit utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Create a value map for object-fit options
  const valueMap = {
    contain: "contain",
    cover: "cover",
    fill: "fill",
    none: "none",
    "scale-down": "scale-down",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "object-fit",
    utilityPrefix: "object",
    valueMap,
    variantKey: "objectFit",
  });
}
