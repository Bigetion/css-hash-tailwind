import { generateCssString } from "../utils/index";

/**
 * Generate border color utilities with directional variants
 * Supports all sides, x/y axes, and individual sides for border color
 * Uses CSS variable for opacity control
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, theme = {} } = configOptions;
  const prefix = `${globalPrefix}border`;
  const { borderColor = {} } = theme;

  return generateCssString(({ pseudoClass, getCssByColors }) => {
    return getCssByColors(borderColor, (keyTmp, value, rgbValue) => {
      // Skip default key
      if (keyTmp.toLowerCase() === "default") {
        return "";
      }
      const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";

      // Define all border color variants
      const colorVariants = [
        // All borders
        {
          suffix: "",
          properties: [
            {
              name: "border-color",
              value,
              rgbValue: rgbValue
                ? `rgba(${rgbValue}, var(--border-opacity))`
                : null,
            },
          ],
        },
        // X-axis (left and right)
        {
          suffix: "-x",
          properties: [
            {
              name: "border-left-color",
              value,
              rgbValue: rgbValue
                ? `rgba(${rgbValue}, var(--border-opacity))`
                : null,
            },
            {
              name: "border-right-color",
              value,
              rgbValue: rgbValue
                ? `rgba(${rgbValue}, var(--border-opacity))`
                : null,
            },
          ],
        },
        // Y-axis (top and bottom)
        {
          suffix: "-y",
          properties: [
            {
              name: "border-top-color",
              value,
              rgbValue: rgbValue
                ? `rgba(${rgbValue}, var(--border-opacity))`
                : null,
            },
            {
              name: "border-bottom-color",
              value,
              rgbValue: rgbValue
                ? `rgba(${rgbValue}, var(--border-opacity))`
                : null,
            },
          ],
        },
        // Logical directions (for RTL support)
        {
          suffix: "-s",
          properties: [
            {
              name: "border-inline-start-color",
              value,
              rgbValue: rgbValue
                ? `rgba(${rgbValue}, var(--border-opacity))`
                : null,
            },
          ],
        },
        {
          suffix: "-e",
          properties: [
            {
              name: "border-inline-end-color",
              value,
              rgbValue: rgbValue
                ? `rgba(${rgbValue}, var(--border-opacity))`
                : null,
            },
          ],
        },
        // Individual sides
        {
          suffix: "-t",
          properties: [
            {
              name: "border-top-color",
              value,
              rgbValue: rgbValue
                ? `rgba(${rgbValue}, var(--border-opacity))`
                : null,
            },
          ],
        },
        {
          suffix: "-r",
          properties: [
            {
              name: "border-right-color",
              value,
              rgbValue: rgbValue
                ? `rgba(${rgbValue}, var(--border-opacity))`
                : null,
            },
          ],
        },
        {
          suffix: "-b",
          properties: [
            {
              name: "border-bottom-color",
              value,
              rgbValue: rgbValue
                ? `rgba(${rgbValue}, var(--border-opacity))`
                : null,
            },
          ],
        },
        {
          suffix: "-l",
          properties: [
            {
              name: "border-left-color",
              value,
              rgbValue: rgbValue
                ? `rgba(${rgbValue}, var(--border-opacity))`
                : null,
            },
          ],
        },
      ];

      // Generate CSS for all variants
      let cssString = "";

      colorVariants.forEach((variant) => {
        const className = `${prefix}${variant.suffix}${key}`;
        let propertyCss = "";

        // Add all properties for this variant
        variant.properties.forEach((prop) => {
          propertyCss += `\n              ${prop.name}: ${prop.value};`;
          if (prop.rgbValue) {
            propertyCss += `\n              ${prop.name}: ${prop.rgbValue};`;
          }
        });

        // Add this variant's CSS
        cssString += `
            ${pseudoClass(className, configOptions.variants.borderColor, {})} {
              --border-opacity: 1;${propertyCss}
            }`;
      });

      return cssString;
    });
  }, configOptions);
}
