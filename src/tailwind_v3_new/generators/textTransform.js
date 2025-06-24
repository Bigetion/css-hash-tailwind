import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generates CSS utility classes for text transformation
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for text-transform utilities
 */
export default function generator(configOptions = {}) {
  const propertyOptions = {
    uppercase: "uppercase",
    lowercase: "lowercase",
    capitalize: "capitalize",
    "normal-case": "none",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "text-transform",
    utilityPrefix: "", // No additional prefix needed as keys are the full class names
    valueMap: propertyOptions,
    variantKey: "textTransform",
    useHyphen: false, // Don't use hyphen between prefix and key (e.g., uppercase not text-uppercase)
  });
}
