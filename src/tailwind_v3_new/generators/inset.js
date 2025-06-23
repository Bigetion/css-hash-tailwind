import { generateDirectionalProperties } from "./utils/generatorUtils";

/**
 * Generate inset utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { inset = {} } = theme;

  // Atau kita bisa menggunakan generateDirectionalProperties yang lebih fleksibel
  return generateDirectionalProperties({
    configOptions,
    valueMap: inset,
    variantKey: "inset",
    supportNegative: true,
    mainProperty: "inset", // properti CSS utama
    utilityPrefix: "inset", // prefix untuk utility classes
    useLogicalProps: true, // generate start/end props (RTL support)
    useAllDirections: true, // generate top/right/bottom/left
    useShorthand: true, // generate inset-x/inset-y
  });
}
