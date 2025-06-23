import { generateCssString } from "../utils/index";

/**
 * Generate size utility classes that set both width and height to the same value
 * 
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { size = {} } = theme;

  // Since we need to set both width and height properties,
  // we'll use generateCssString directly for more control
  return generateCssString(({ pseudoClass, getCssByOptions }) => {
    return getCssByOptions(size, (key, value) => {
      return `
        ${pseudoClass(`${configOptions.prefix}size-${key}`, 
          configOptions.variants.size || [])} {
          width: ${value};
          height: ${value};
        }
      `;
    });
  }, configOptions);
}
