import { generateCssString } from "../utils";

export default function generateFloat(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}float`;

  const propertyOptions = ["left", "right", "none"];

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, pseudoClass, getCssByOptions }) => {
      let cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.float)} {
            float: ${value};
          }
        `
      );
      cssString += `
        .${orientationPrefix}${globalPrefix}clearfix:after {
          content: "";
          display: table;
          clear: both;
        }
      `;
      return cssString;
    },
    configOptions,
    variants.float.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
