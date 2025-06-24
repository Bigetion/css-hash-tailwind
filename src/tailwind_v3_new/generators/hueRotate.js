import { generateCssString } from "../utils/index";

/**
 * Generates CSS utility classes for hue-rotate and backdrop-hue-rotate effects
 * These utilities control the hue rotation filter applied to elements
 * Special handling for negative values (e.g., -hue-rotate-15)
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for hue-rotate and backdrop-hue-rotate utilities
 */
export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;
  const { hueRotate = {} } = theme;
  // Create a modified hueRotate object with both positive and negative values
  const processedHueRotate = { ...hueRotate };
  
  // Add negative versions of each value if they don't already exist
  Object.entries(hueRotate).forEach(([key, value]) => {
    // Skip keys that already start with "-" or are "0" (no need for negative zero)
    if (!key.startsWith("-") && key !== "0") {
      const valueAsNumber = parseFloat(value);
      if (!isNaN(valueAsNumber)) {
        // Create negative key with the same base value
        processedHueRotate[`-${key}`] = value.toString().startsWith("-") 
          ? value.substring(1) // If value is already negative, make it positive
          : `-${value}`; // Otherwise make it negative
      }
    }
  });
  
  return generateCssString(({ pseudoClass, getCssByOptions }) => {
    const cssString = getCssByOptions(processedHueRotate, (keyTmp, value) => {
      let prefix = `${globalPrefix}hue-rotate`;
      const basePrefix = "hue-rotate"; // Fixed base prefix
      let key = keyTmp;
      let cssValue = value; // Store transformed value separately

      // Special handling for negative values
      if (key.startsWith("-")) {
        // For class names: remove hyphen from key, add it to prefix
        key = key.substring(1);
        prefix = `${globalPrefix}-hue-rotate`;
        
        // Make sure value is negative for presentation
        if (!cssValue.toString().startsWith("-") && key !== "0") {
          cssValue = `-${cssValue}`;
        }
      }

      // Generate standard hue-rotate utility
      let result = `
          ${pseudoClass(`${prefix}-${key}`, variants.hueRotate)} {
            --hue-rotate: hue-rotate(${cssValue}) !important;
          }`;

      // Generate backdrop-hue-rotate utility
      result += `
          ${pseudoClass(
            `${globalPrefix}backdrop-${basePrefix}-${key}`,
            variants.hueRotate
          )} {
            --backdrop-hue-rotate: hue-rotate(${cssValue}) !important;
          }
        `;

      return result;
    });    return cssString;
  }, configOptions);
}
