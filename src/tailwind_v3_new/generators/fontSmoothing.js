import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate font-smoothing utility classes for controlling text rendering
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Mendefinisikan mapping nilai untuk kelas font-smoothing
  const valueMap = {
    antialiased: {
      webkit: "antialiased",
      moz: "grayscale",
    },
    "subpixel-antialiased": {
      webkit: "auto",
      moz: "auto",
    },
  };

  // Menggunakan generateSimpleUtility dengan multi-property configuration
  return generateSimpleUtility({
    configOptions,
    cssProperty: [
      {
        property: "-webkit-font-smoothing",
        transformValue: (value) => value.webkit,
      },
      {
        property: "-moz-osx-font-smoothing",
        transformValue: (value) => value.moz,
      },
    ],
    utilityPrefix: "", // Empty prefix since we want "antialiased" not "font-smoothing-antialiased"
    valueMap,
    variantKey: "fontSmoothing",
    useHyphen: false, // Don't add hyphen between prefix and key
  });
}
