import { generateSimpleUtility } from "../utils/generator";

/**
 * Generates CSS utility classes for background-clip with vendor prefixes
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for background-clip utilities
 */
export default function generator(configOptions = {}) {
  const propertyOptions = {
    border: "border-box",
    padding: "padding-box",
    content: "content-box",
    text: "text",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: ["-webkit-background-clip", "background-clip"], // Array of properties to set with the same value
    utilityPrefix: "bg-clip",
    valueMap: propertyOptions,
    variantKey: "backgroundClip",
  });
}
