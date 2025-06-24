import { generateSimpleUtility } from "../utils/generator";

/**
 * Generates CSS utility classes for list style type
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for list-style-type utilities
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { listStyleType = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "list-style-type",
    utilityPrefix: "list",
    valueMap: listStyleType,
    variantKey: "listStyleType",
  });
}
