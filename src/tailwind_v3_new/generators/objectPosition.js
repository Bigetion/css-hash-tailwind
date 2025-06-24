import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate object-position utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Create a value map for object-position options
  // For this utility, keys and base values are the same
  const valueMap = [
    "bottom",
    "center",
    "left",
    "left-bottom",
    "left-top",
    "right",
    "right-bottom",
    "right-top",
    "top",
  ].reduce((acc, value) => {
    acc[value] = value;
    return acc;
  }, {});

  // Transform function to convert hyphens to spaces
  const transformValue = (value) => value.split("-").join(" ");

  return generateSimpleUtility({
    configOptions,
    cssProperty: "object-position",
    utilityPrefix: "object",
    valueMap,
    variantKey: "objectPosition",
    transformValue,
  });
}
