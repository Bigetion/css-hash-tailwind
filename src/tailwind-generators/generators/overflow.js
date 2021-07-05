import { generateCssString } from "../utils";

export default function generateOverflow(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}overflow`;

  const propertyOptions = ["auto", "hidden", "visible", "scroll"];

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, pseudoClass, getCssByOptions }) => {
      let cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.overflow)} {
            overflow: ${value};
          }
          ${pseudoClass(`${prefix}-x-${key}`, variants.overflow)} {
            overflow-x: ${value};
          }
          ${pseudoClass(`${prefix}-y-${key}`, variants.overflow)} {
            overflow-y: ${value};
          }
        `
      );
      cssString += `
        .${orientationPrefix}${globalPrefix}scrolling-touch {
          -webkit-overflow-scrolling: touch;
        }
        .${orientationPrefix}${globalPrefix}scrolling-auto {
          -webkit-overflow-scrolling: auto;
        }
      `;
      return cssString;
    },
    configOptions,
    variants.overflow.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
