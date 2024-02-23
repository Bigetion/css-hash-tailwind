import { generateCssString } from "../utils/index";

export default function generateOutlineStyle(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}outline`;

  const propertyOptions = ["none", "solid", "dashed", "dotted", "double"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        const key = keyTmp !== "solid" ? `-${keyTmp}` : "";
        if (key === "none") {
          return `
            ${pseudoClass(`${prefix}-${key}`, variants.outlineStyle)} {
              outline: 2px solid transparent;
              outline-offset: 2px;
            }
          `;
        }
        return `
          ${pseudoClass(`${prefix}${key}`, variants.outlineStyle)} {
            outline-style: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.outlineStyle.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
