import { generateCssString } from "../utils/index";
import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate flex-grow utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {}, prefix: globalPrefix, variants = {} } = configOptions;
  const { flexGrow = {} } = theme;

  // Check if we have a "default" key that needs special handling
  if (Object.keys(flexGrow).some((key) => key.toLowerCase() === "default")) {
    // Handle the special case for "default" key which should be just "grow" without a hyphen
    return generateCssString(({ pseudoClass, getCssByOptions }) => {
      const prefix = `${globalPrefix}grow`;

      return getCssByOptions(flexGrow, (key, value) => {
        const className =
          key.toLowerCase() === "default" ? prefix : `${prefix}-${key}`;

        return `
          ${pseudoClass(className, variants.flexGrow)} {
            flex-grow: ${value};
          }
        `;
      });
    }, configOptions);
  } else {
    // If no special case, use the standard utility generator
    return generateSimpleUtility({
      configOptions,
      cssProperty: "flex-grow",
      utilityPrefix: "grow",
      valueMap: flexGrow,
      variantKey: "flexGrow",
    });
  }
}
