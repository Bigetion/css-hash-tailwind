import { generateCssString } from "../utils/index";

/**
 * Generates gradient color stop utilities (from, via, to)
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for gradient color stop utilities
 */
export default function generator(configOptions = {}) {
  const { prefix, variants = {}, theme = {} } = configOptions;
  const { gradientColorStops = {} } = theme; // Helper function to generate CSS for a gradient color stop type (from, via, or to)
  function generateGradientStop(
    type,
    variantOptions,
    getCssByColors,
    pseudoClass
  ) {
    return getCssByColors(gradientColorStops, (key, value, rgbValue) => {
      // Base property that's always set
      const colorVar = `--gradient-${type}-color: ${value};`;

      // Default color stops CSS
      let colorStopsCSS = "";

      // Apply the specific color stops CSS based on type
      if (type === "from") {
        colorStopsCSS = `--gradient-color-stops: var(--gradient-from-color),var(--gradient-to-color,rgba(${
          rgbValue || "255,255,255"
        },0));`;
      } else if (type === "via") {
        colorStopsCSS = `--gradient-color-stops: var(--gradient-from-color),var(--gradient-via-color),var(--gradient-to-color,rgba(${
          rgbValue || "255,255,255"
        },0));`;
      } else if (type === "to") {
        colorStopsCSS = `--gradient-color-stops: var(--gradient-from-color),var(--gradient-to-color,rgba(${
          rgbValue || "255,255,255"
        },0));`;
      }

      return `
        ${pseudoClass(`${prefix}${type}-${key}`, variantOptions)} {
          ${colorVar}
          ${colorStopsCSS}
        }
      `;
    });
  }

  // Generate all gradient color stops
  return generateCssString(({ pseudoClass, getCssByColors }) => {
    const variantOptions = variants.gradientColorStops || [];

    // Generate all three types of color stops (from, via, to)
    const fromClasses = generateGradientStop(
      "from",
      variantOptions,
      getCssByColors,
      pseudoClass
    );
    const viaClasses = generateGradientStop(
      "via",
      variantOptions,
      getCssByColors,
      pseudoClass
    );
    const toClasses = generateGradientStop(
      "to",
      variantOptions,
      getCssByColors,
      pseudoClass
    );

    return fromClasses + viaClasses + toClasses;
  }, configOptions);
}
