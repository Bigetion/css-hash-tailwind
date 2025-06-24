import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate z-index utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { zIndex = {} } = theme;

  // Handle negative z-index values
  const processedValues = { ...zIndex };
  Object.entries(zIndex).forEach(([key, value]) => {
    // If key already has a minus sign, skip it
    if (!key.startsWith("-") && key !== "auto") {
      processedValues[`-${key}`] = `-${value}`.replace("--", "-");
    }
  });

  return generateSimpleUtility({
    configOptions,
    cssProperty: "z-index",
    utilityPrefix: "z", // The prefix for z-index utilities is "z"
    valueMap: processedValues,
    variantKey: "zIndex",
    useHyphen: true, // Use hyphen between prefix and key (e.g., "z-50", "z-auto")
  });
}
