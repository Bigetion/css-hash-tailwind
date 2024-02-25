import { generateCssString } from "../utils/index";

export default function generateGridTemplateColumns(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  let prefix = `${globalPrefix}grid-cols`;

  const { gridTemplateColumns: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      let cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.gridTemplateColumns)} {
            grid-template-columns: ${
              isNaN(value) ? value : `repeat(${value}, minmax(0, 1fr))`
            };
          }
        `
      );
      cssString += getCssByOptions(
        { default: "" },
        () => `
          ${pseudoClass(`${prefix}-subgrid`, {})} {
            grid-template-columns: subgrid;
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.gridTemplateColumns.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
