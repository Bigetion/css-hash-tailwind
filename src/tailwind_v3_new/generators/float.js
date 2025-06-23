import { generateCssString } from "../utils/index";
import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate float utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  // Create a value map for float options
  const valueMap = {
    left: "left",
    right: "right",
    none: "none",
  };

  // Generate standard float utilities
  const floatCSS = generateSimpleUtility({
    configOptions,
    cssProperty: "float",
    utilityPrefix: "float",
    valueMap,
    variantKey: "float",
  });

  // Generate the special clearfix utility
  const clearfixCSS = generateCssString(
    ({ pseudoClass }) => `
      ${pseudoClass(
        (pseudoString) => `${globalPrefix}clearfix${pseudoString}:after`,
        variants.float || []
      )} {
        content: "";
        display: table;
        clear: both;
      }
    `,
    configOptions
  );

  // Combine both CSS strings
  return floatCSS + clearfixCSS;
}
