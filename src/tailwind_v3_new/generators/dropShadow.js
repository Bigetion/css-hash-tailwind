import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate drop shadow utilities
 * Sets a CSS custom property (--drop-shadow) that can be used for filter effects
 * Transforms comma-separated shadow values into space-separated drop-shadow() functions
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { dropShadow = {} } = theme;

  /**
   * Transform function to convert comma-separated shadow values
   * into space-separated drop-shadow() functions with !important
   *
   * @param {string} value - The comma-separated shadow value
   * @returns {string} Transformed value with drop-shadow() functions
   */
  const transformShadowValue = (value) => {
    const shadowFunctions = value
      .split(",")
      .map((shadow) => `drop-shadow(${shadow.trim()})`)
      .join(" ");

    return `${shadowFunctions} !important`;
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "--drop-shadow",
    utilityPrefix: "drop-shadow",
    valueMap: dropShadow,
    variantKey: "dropShadow",
    transformValue: transformShadowValue,
  });
}
