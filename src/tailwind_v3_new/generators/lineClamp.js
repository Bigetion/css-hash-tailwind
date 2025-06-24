import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate line-clamp utility classes for truncating text at a specific number of lines
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { lineClamp = {} } = theme;

  return generateSimpleUtility({
    configOptions,
    cssProperty: [
      // Multiple properties with fixed values
      { property: "overflow", transformValue: () => "hidden" },
      { property: "display", transformValue: () => "-webkit-box" },
      // Property with conditional logic
      {
        property: "-webkit-box-orient",
        transformValue: (value) =>
          value === "none" ? "horizontal" : "vertical",
      },
      // Property that uses the actual value
      { property: "-webkit-line-clamp", transformValue: (value) => value },
    ],
    utilityPrefix: "line-clamp",
    valueMap: lineClamp,
    variantKey: "lineClamp",
  });
}
