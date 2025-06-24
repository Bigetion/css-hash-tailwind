import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate font-style utility classes
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Nilai untuk properti font-style
  const valueMap = {
    italic: "italic",
    "not-italic": "normal",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "font-style",
    utilityPrefix: "", // Kosong karena kita ingin kelas seperti "italic", bukan "font-style-italic"
    valueMap,
    variantKey: "fontStyle",
    useHyphen: false, // Jangan gunakan pemisah antara prefix dan key
  });
}
