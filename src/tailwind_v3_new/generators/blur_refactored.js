import { generateTransformFilterUtility } from "../utils/generator";

/**
 * Generate blur filter utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { blur = {} } = theme;

  return generateTransformFilterUtility({
    configOptions,
    cssProperty: "filter",
    utilityPrefix: "blur",
    valueMap: blur,
    variantKey: "blur",
    functionName: "blur"
  });
}
