import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate box-decoration-break utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Create a value map from the array of box-decoration-break options
  const valueMap = {
    slice: "slice",
    clone: "clone",
  };

  // Use custom transform to add webkit prefix
  const transformValue = (value) => {
    // Return multiple properties as a string
    return `${value};\n  -webkit-box-decoration-break: ${value}`;
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "box-decoration-break",
    utilityPrefix: "box-decoration",
    valueMap,
    variantKey: "boxDecorationBreak",
    transformValue,
  });
}
