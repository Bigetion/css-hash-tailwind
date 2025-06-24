import { generateSimpleUtility } from "../utils/generator";

/**
 * Generates CSS utility classes for text decoration
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for text-decoration utilities
 */
export default function generator(configOptions = {}) {
  const propertyOptions = {
    underline: "underline",
    overline: "overline",
    "line-through": "line-through",
    "no-underline": "none",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "text-decoration",
    utilityPrefix: "", // No additional prefix needed since keys already have it
    valueMap: propertyOptions,
    variantKey: "textDecoration",
    useHyphen: false, // Use class names without hyphens (e.g., underline not text-underline)
  });
}
