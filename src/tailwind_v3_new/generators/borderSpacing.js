import { generateCssString } from "../utils/index";
import { generateCustomUtility } from "../utils/generator";

/**
 * Generate border spacing utilities
 * Uses CSS variables to allow independent control of x and y spacing
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, theme = {} } = configOptions;
  const prefix = `${globalPrefix}border-spacing`;
  const { borderSpacing = {} } = theme;

  return generateCssString(({ getCssByOptions }) => {
    return getCssByOptions(borderSpacing, (keyTmp, value) => {
      const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";

      // Define all the border spacing variants
      const spacingVariants = [
        // Default (both x and y)
        {
          className: `${prefix}${key}`,
          properties: { "border-spacing": value },
        },
        // X-axis variant (uses CSS variables)
        {
          className: `${prefix}-x${key}`,
          properties: {
            "--border-spacing-x": value,
            "border-spacing":
              "var(--border-spacing-x) var(--border-spacing-y, 0)",
          },
        },
        // Y-axis variant (uses CSS variables)
        {
          className: `${prefix}-y${key}`,
          properties: {
            "--border-spacing-y": value,
            "border-spacing":
              "var(--border-spacing-x, 0) var(--border-spacing-y)",
          },
        },
      ];

      // Generate CSS for all variants
      return spacingVariants
        .map((variant) => {
          return generateCustomUtility({
            configOptions,
            className: variant.className.substring(globalPrefix.length), // Remove the global prefix
            properties: variant.properties,
            variantKey: "borderSpacing",
          }).replace(/\n\s*generateCssString\([^)]+\)/, ""); // Remove the generateCssString wrapper
        })
        .join("\n");
    });
  }, configOptions);
}
