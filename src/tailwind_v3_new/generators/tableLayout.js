import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate table-layout utility classes
 * Controls the algorithm used for table layout (auto or fixed)
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Define the value map for table layout options
  const valueMap = {
    auto: "auto",
    fixed: "fixed",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "table-layout",
    utilityPrefix: "table",
    valueMap,
    variantKey: "tableLayout",
  });
}
