import { generateCssString } from "../utils/index";
import { generateCustomUtility } from "../utils/generator";

/**
 * Generate border radius utilities
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, theme = {} } = configOptions;
  const prefix = `${globalPrefix}rounded`;
  const { borderRadius = {} } = theme;

  return generateCssString(({ getCssByOptions }) => {
    return getCssByOptions(borderRadius, (keyTmp, value) => {
      const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";

      // Define all the border radius variants
      const radiusVariants = [
        // All corners (default)
        {
          className: `${prefix}${key}`,
          properties: { "border-radius": value },
        },
        // Start/end sides (logical properties)
        {
          className: `${prefix}-s${key}`,
          properties: {
            "border-start-start-radius": value,
            "border-end-start-radius": value,
          },
        },
        {
          className: `${prefix}-e${key}`,
          properties: {
            "border-start-end-radius": value,
            "border-end-end-radius": value,
          },
        },
        // Top/right/bottom/left sides
        {
          className: `${prefix}-t${key}`,
          properties: {
            "border-top-left-radius": value,
            "border-top-right-radius": value,
          },
        },
        {
          className: `${prefix}-r${key}`,
          properties: {
            "border-top-right-radius": value,
            "border-bottom-right-radius": value,
          },
        },
        {
          className: `${prefix}-b${key}`,
          properties: {
            "border-bottom-right-radius": value,
            "border-bottom-left-radius": value,
          },
        },
        {
          className: `${prefix}-l${key}`,
          properties: {
            "border-top-left-radius": value,
            "border-bottom-left-radius": value,
          },
        },
        // Individual corners (logical properties)
        {
          className: `${prefix}-ss${key}`,
          properties: { "border-start-start-radius": value },
        },
        {
          className: `${prefix}-se${key}`,
          properties: { "border-start-end-radius": value },
        },
        {
          className: `${prefix}-ee${key}`,
          properties: { "border-end-end-radius": value },
        },
        {
          className: `${prefix}-es${key}`,
          properties: { "border-end-start-radius": value },
        },
        // Individual corners (physical properties)
        {
          className: `${prefix}-tl${key}`,
          properties: { "border-top-left-radius": value },
        },
        {
          className: `${prefix}-tr${key}`,
          properties: { "border-top-right-radius": value },
        },
        {
          className: `${prefix}-br${key}`,
          properties: { "border-bottom-right-radius": value },
        },
        {
          className: `${prefix}-bl${key}`,
          properties: { "border-bottom-left-radius": value },
        },
      ];

      // Generate the CSS for all variants
      return radiusVariants
        .map((variant) => {
          return generateCustomUtility({
            configOptions,
            className: variant.className.substring(globalPrefix.length), // Remove the global prefix as it's added by generateCustomUtility
            properties: variant.properties,
            variantKey: "borderRadius",
          }).replace(/\n\s*generateCssString\([^)]+\)/, ""); // Remove the generateCssString wrapper
        })
        .join("\n");
    });
  }, configOptions);
}
