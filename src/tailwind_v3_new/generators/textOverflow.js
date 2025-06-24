import {
  generateSimpleUtility,
  generateCustomUtility,
} from "./utils/generatorUtils";

/**
 * Generates CSS utility classes for text overflow handling
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for text-overflow utilities
 */
export default function generator(configOptions = {}) {
  // Generate the special truncate utility which sets multiple properties
  const truncateUtility = generateCustomUtility({
    configOptions,
    className: "truncate",
    properties: {
      overflow: "hidden",
      "text-overflow": "ellipsis",
      "white-space": "nowrap",
    },
    variantKey: "textOverflow",
  });

  // Generate the regular text-overflow utilities
  const propertyOptions = {
    ellipsis: "ellipsis",
    clip: "clip",
  };

  const textOverflowUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "text-overflow",
    utilityPrefix: "text",
    valueMap: propertyOptions,
    variantKey: "textDecoration",
  });

  return truncateUtility + textOverflowUtilities;
}
