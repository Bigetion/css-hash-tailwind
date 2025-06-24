import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate font-variant-numeric utility classes for controlling numeric figures
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Map nilai untuk properti font-variant-numeric
  const valueMap = {
    "normal-nums": "normal",
    ordinal: "ordinal",
    "slashed-zero": "slashed-zero",
    "lining-nums": "lining-nums",
    "oldstyle-nums": "oldstyle-nums",
    "proportional-nums": "proportional-nums",
    "tabular-nums": "tabular-nums",
    "diagonal-fractions": "diagonal-fractions",
    "stacked-fractions": "stacked-fractions",
  };

  return generateSimpleUtility({
    configOptions,
    cssProperty: "font-variant-numeric",
    utilityPrefix: "", // Menggunakan prefix dari configOptions
    valueMap,
    variantKey: "fontVariantNumeric",
    useHyphen: true, // Mempertahankan hyphen di nama kelas seperti "normal-nums"
  });
}
