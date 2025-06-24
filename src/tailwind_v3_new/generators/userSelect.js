import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate user-select utility classes
 * Controls whether the user can select text in an element
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Convert array to object mapping for generateSimpleUtility
  const userSelectValues = {
    none: "none",
    text: "text",
    all: "all",
    auto: "auto",
  };

  return generateSimpleUtility({
    configOptions,
    // Use an array of properties to handle vendor prefixes
    cssProperty: [
      "-webkit-user-select",
      "-moz-user-select",
      "-ms-user-select",
      "user-select",
    ],
    utilityPrefix: "select",
    valueMap: userSelectValues,
    variantKey: "userSelect",
  });
}
