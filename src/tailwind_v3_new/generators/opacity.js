import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate opacity utilities
 * Creates both standard opacity and backdrop opacity utilities
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { opacity = {} } = theme;

  // Generate standard opacity utilities
  const opacityUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "opacity",
    utilityPrefix: "opacity",
    valueMap: opacity,
    variantKey: "opacity",
  });

  // Generate backdrop opacity utilities
  const backdropOpacityUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "--backdrop-opacity",
    utilityPrefix: "backdrop-opacity",
    valueMap: opacity,
    variantKey: "opacity",
    transformValue: (value) => `opacity(${value})`,
  });

  return opacityUtilities + "\n" + backdropOpacityUtilities;
}
