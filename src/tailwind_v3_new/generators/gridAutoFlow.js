import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate grid-auto-flow utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const valueMap = {
    row: "row",
    col: "column",
    "row-dense": "row dense",
    "col-dense": "column dense",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "grid-auto-flow",
    utilityPrefix: "grid-flow",
    valueMap,
    variantKey: "gridAutoFlow",
  });
}
