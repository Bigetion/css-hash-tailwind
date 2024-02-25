import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  let prefix = `${globalPrefix}grid-rows`;

  const { gridTemplateRows: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      let cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.gridTemplateRows)} {
            grid-template-rows: ${
              isNaN(value) ? value : `repeat(${value}, minmax(0, 1fr));`
            };
          }
        `
      );
      cssString += getCssByOptions(
        { default: "" },
        () => `
          ${pseudoClass(`${prefix}-subgrid`, {})} {
            grid-template-rows: subgrid;
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.gridTemplateRows.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
