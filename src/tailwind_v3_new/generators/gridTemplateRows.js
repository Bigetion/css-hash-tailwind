import { generateSimpleUtility } from "../utils/generator";
import { generateCssString } from "../utils/index";

/**
 * Generate grid-template-rows utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {}, prefix: globalPrefix, variants = {} } = configOptions;
  const { gridTemplateRows = {} } = theme;

  // Transform function for grid-template-rows values
  // Numbers are converted to repeat(n, minmax(0, 1fr))
  const transformGridValue = (value) => {
    return isNaN(value) ? value : `repeat(${value}, minmax(0, 1fr))`;
  };

  // Generate the standard grid-template-rows utilities
  const mainUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "grid-template-rows",
    utilityPrefix: "grid-rows",
    valueMap: gridTemplateRows,
    variantKey: "gridTemplateRows",
    transformValue: transformGridValue,
  });

  // Generate the special subgrid utility
  const prefix = `${globalPrefix}grid-rows`;
  const subgridUtility = generateCssString(({ pseudoClass }) => {
    return `
        ${pseudoClass(`${prefix}-subgrid`, variants.gridTemplateRows)} {
          grid-template-rows: subgrid;
        }
      `;
  }, configOptions);

  // Combine both utility sets
  return mainUtilities + subgridUtility;
}
