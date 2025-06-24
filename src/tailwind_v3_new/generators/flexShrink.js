import { generateCssString } from "../utils/index";
import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate flex-shrink utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {}, prefix: globalPrefix, variants = {} } = configOptions;
  const { flexShrink = {} } = theme;

  // Check if we have a "default" key that needs special handling
  if (Object.keys(flexShrink).some((key) => key.toLowerCase() === "default")) {
    // Handle the special case for "default" key which should be just "shrink" without a hyphen
    return generateCssString(({ pseudoClass, getCssByOptions }) => {
      const prefix = `${globalPrefix}shrink`;

      return getCssByOptions(flexShrink, (key, value) => {
        const className =
          key.toLowerCase() === "default" ? prefix : `${prefix}-${key}`;

        return `
          ${pseudoClass(className, variants.flexShrink)} {
            flex-shrink: ${value};
          }
        `;
      });
    }, configOptions);
  } else {
    // If no special case, use the standard utility generator
    return generateSimpleUtility({
      configOptions,
      cssProperty: "flex-shrink",
      utilityPrefix: "shrink",
      valueMap: flexShrink,
      variantKey: "flexShrink",
    });
  }
}
