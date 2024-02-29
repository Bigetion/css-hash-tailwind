import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}ring`;

  const { ringWidth = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      let cssString = getCssByOptions(ringWidth, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.ringWidth)} {
            --ring-offset-shadow: var(--ring-inset) 0 0 0 var(--ring-offset-width) var(--ring-offset-color);
            --ring-shadow: var(--ring-inset) 0 0 0 calc(${value} + var(--ring-offset-width)) var(--ring-color);
            box-shadow: var(--ring-offset-shadow), var(--ring-shadow), var(--shadow, 0 0 #0000);
          }
        `;
      });
      cssString += `  
        ${pseudoClass(`${prefix}-inset`, variants.ringWidth)} {
          --ring-inset: inset;
        }
      `;
      return cssString;
    },
    configOptions,
    variants.ringWidth.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
