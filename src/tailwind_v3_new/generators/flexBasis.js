import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate flex-basis utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { flexBasis = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: "flex-basis",
    utilityPrefix: "basis",
    valueMap: flexBasis,
    variantKey: "flexBasis",
  });
}
