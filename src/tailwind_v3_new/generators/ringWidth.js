import { generateCustomUtility } from "./utils/generatorUtils";

/**
 * Generate ring width utilities
 * Uses CSS variables and box-shadow to create focus ring effects
 * Also includes a special 'ring-inset' utility to make rings appear inside elements
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { ringWidth = {} } = theme;

  // Generate the regular ring width utilities
  const ringWidthUtilities = Object.entries(ringWidth)
    .map(([keyTmp, value]) => {
      const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
      const className = `ring${key}`;

      return generateCustomUtility({
        configOptions,
        className,
        properties: {
          "--ring-offset-shadow":
            "var(--ring-inset) 0 0 0 var(--ring-offset-width) var(--ring-offset-color)",
          "--ring-shadow": `var(--ring-inset) 0 0 0 calc(${value} + var(--ring-offset-width)) var(--ring-color)`,
          "box-shadow": "var(--ring-offset-shadow), var(--ring-shadow)",
        },
        variantKey: "ringWidth",
      });
    })
    .join("\n");

  // Generate the special ring-inset utility
  const ringInsetUtility = generateCustomUtility({
    configOptions,
    className: "ring-inset",
    properties: {
      "--ring-inset": "inset",
    },
    variantKey: "ringWidth",
  });

  // Combine both sets of utilities
  return ringWidthUtilities + "\n" + ringInsetUtility;
}
