import { generateSimpleUtility } from "../utils/generator";

/**
 * Generates CSS utility classes for background-attachment
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for background-attachment utilities
 */
export default function generator(configOptions = {}) {
  // Map property values as object with key-value pairs
  const propertyOptions = {
    fixed: "fixed",
    local: "local",
    scroll: "scroll",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "background-attachment",
    utilityPrefix: "bg",
    valueMap: propertyOptions,
    variantKey: "backgroundAttachment",
  });
}
