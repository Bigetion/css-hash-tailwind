import { generateSimpleUtility } from "./utils/generatorUtils";
import { generateCssString } from "../utils/index";

/**
 * Generate resize utility classes
 * Controls how an element can be resized
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  // Resize has a special case where the class name "resize" with no suffix
  // creates "resize: both". We need custom handling for this.

  // First, handle the regular resize-x and resize-y utilities
  const propertyOptions = {
    none: "none",
    y: "vertical",
    x: "horizontal",
  };

  // Generate the standard variants
  const standardResizeUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "resize",
    utilityPrefix: "resize",
    valueMap: propertyOptions,
    variantKey: "resize",
  });

  // Now handle the special case for "resize" (without suffix) → "resize: both"
  const specialCaseUtility = generateCssString(({ pseudoClass }) => {
    return `
        ${pseudoClass(`${globalPrefix}resize`, variants.resize)} {
          resize: both;
        }
      `;
  }, configOptions);

  // Combine all utilities
  return standardResizeUtilities + "\n" + specialCaseUtility;
}
