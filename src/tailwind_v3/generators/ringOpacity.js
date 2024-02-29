import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}ring-opacity`;

  const { ringOpacity = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(ringOpacity, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.ringOpacity)} {
            --ring-opacity: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.ringOpacity.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
