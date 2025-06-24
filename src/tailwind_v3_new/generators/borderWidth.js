import { generateCssString } from "../utils/index";
import { generateCustomUtility } from "../utils/generator";

/**
 * Generate border width utilities
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, theme = {} } = configOptions;
  const prefix = `${globalPrefix}border`;
  const { borderWidth = {} } = theme;

  return generateCssString(({ getCssByOptions }) => {
    return getCssByOptions(borderWidth, (keyTmp, value) => {
      const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";

      // Define all the border width variants
      const widthVariants = [
        // All sides (default)
        {
          className: `${prefix}${key}`,
          properties: { "border-width": value },
        },
        // X/Y axes
        {
          className: `${prefix}-x${key}`,
          properties: {
            "border-left-width": value,
            "border-right-width": value,
          },
        },
        {
          className: `${prefix}-y${key}`,
          properties: {
            "border-top-width": value,
            "border-bottom-width": value,
          },
        },
        // Logical properties (RTL support)
        {
          className: `${prefix}-s${key}`,
          properties: { "border-inline-start-width": value },
        },
        {
          className: `${prefix}-e${key}`,
          properties: { "border-inline-end-width": value },
        },
        // Individual sides
        {
          className: `${prefix}-t${key}`,
          properties: { "border-top-width": value },
        },
        {
          className: `${prefix}-r${key}`,
          properties: { "border-right-width": value },
        },
        {
          className: `${prefix}-b${key}`,
          properties: { "border-bottom-width": value },
        },
        {
          className: `${prefix}-l${key}`,
          properties: { "border-left-width": value },
        },
      ];

      // Generate CSS for all variants
      return widthVariants
        .map((variant) => {
          return generateCustomUtility({
            configOptions,
            className: variant.className.substring(globalPrefix.length), // Remove the global prefix
            properties: variant.properties,
            variantKey: "borderWidth",
          }).replace(/\n\s*generateCssString\([^)]+\)/, ""); // Remove the generateCssString wrapper
        })
        .join("\n");
    });
  }, configOptions);
}
