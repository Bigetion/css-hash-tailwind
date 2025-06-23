import { generateSimpleUtility } from "./utils/generatorUtils";
import { generateCssString } from "../utils/index";

/**
 * Generate grid-template-columns utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {}, prefix: globalPrefix, variants = {} } = configOptions;
  const { gridTemplateColumns = {} } = theme;

  // Transform function for grid-template-columns values
  // Numbers are converted to repeat(n, minmax(0, 1fr))
  const transformGridValue = (value) => {
    return isNaN(value) ? value : `repeat(${value}, minmax(0, 1fr))`;
  };

  // Generate the standard grid-template-columns utilities
  const mainUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "grid-template-columns",
    utilityPrefix: "grid-cols",
    valueMap: gridTemplateColumns,
    variantKey: "gridTemplateColumns",
    transformValue: transformGridValue,
  });

  // Generate the special subgrid utility
  const prefix = `${globalPrefix}grid-cols`;
  const subgridUtility = generateCssString(({ pseudoClass }) => {
    return `
        ${pseudoClass(`${prefix}-subgrid`, variants.gridTemplateColumns)} {
          grid-template-columns: subgrid;
        }
      `;
  }, configOptions);

  // Combine both utility sets
  return mainUtilities + subgridUtility;
}
