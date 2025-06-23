import { generateSpaceBetweenUtility } from "./utils/generatorUtils";

/**
 * Generate space-between utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { space = {} } = theme;

  return generateSpaceBetweenUtility({
    configOptions,
    valueMap: space,
  });
}
