import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate touch-action utility classes
 * Controls how touch interactions are handled on an element
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Convert array to object mapping for generateSimpleUtility
  const touchActionValues = {
    auto: "auto",
    none: "none",
    "pan-x": "pan-x",
    "pan-left": "pan-left",
    "pan-right": "pan-right",
    "pan-y": "pan-y",
    "pan-up": "pan-up",
    "pan-down": "pan-down",
    "pinch-zoom": "pinch-zoom",
    manipulation: "manipulation",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "touch-action",
    utilityPrefix: "touch",
    valueMap: touchActionValues,
    variantKey: "touchAction",
  });
}
