import { generateFlexGridUtility } from "../utils/generator";

/**
 * Generate flex direction utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Define the value map for flex direction options
  const flexDirectionOptions = {
    row: "row",
    "row-reverse": "row-reverse", 
    col: "column",
    "col-reverse": "column-reverse"
  };

  return generateFlexGridUtility({
    configOptions,
    cssProperty: "flex-direction",
    utilityPrefix: "flex",
    valueMap: flexDirectionOptions,
    variantKey: "flexDirection"
  });
}
