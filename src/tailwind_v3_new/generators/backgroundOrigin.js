import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generates CSS utility classes for background-origin with vendor prefixes
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for background-origin utilities
 */
export default function generator(configOptions = {}) {
  const propertyOptions = {
    border: "border-box",
    padding: "padding-box",
    content: "content-box",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: ["-webkit-background-origin", "background-origin"], // Array of properties to set with the same value
    utilityPrefix: "bg-origin",
    valueMap: propertyOptions,
    variantKey: "backgroundOrigin",
  });
}
