import { cssHash } from "css-hash";

import { generateCss, hexToRgb } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix, colors, opacity } = configOptions;

const prefix = `${globalPrefix}placeholder`;
const pseudoElements = ["", "focus"];

const responsiveCssString = generateCss(
  ({ orientationPrefix, getCssByOptions }) => {
    const generatePlaceholderColor = (name, htmlColor) => {
      let str = "";
      const classList = (placeholderPseudo = "") =>
        pseudoElements
          .map((item) => {
            let className = `
          .${orientationPrefix}${prefix}-${name}${placeholderPseudo}
        `;
            if (item !== "") {
              className = `
            .${orientationPrefix}${item}\\:${prefix}-${name}:${item}${placeholderPseudo}
          `;
            }
            return className;
          })
          .join(", ");

      if (htmlColor === "transparent") {
        str += `
        ${classList("::-webkit-input-placeholder")} {
          color: transparent;
        }
        ${classList(":-ms-input-placeholder")} {
          color: transparent;
        }
        ${classList("::-ms-input-placeholder")} {
          color: transparent;
        }
        ${classList("::placeholder")} {
          color: transparent;
        }
      `;
      } else {
        const rgbColor = hexToRgb(htmlColor);
        str += `
        ${classList("::-webkit-input-placeholder")} {
          --placeholder-opacity: 1;
          color: ${htmlColor};
          color: rgba(${rgbColor}, var(--placeholder-opacity));
        }
        ${classList(":-ms-input-placeholder")} {
          --placeholder-opacity: 1;
          color: ${htmlColor};
          color: rgba(${rgbColor}, var(--placeholder-opacity));
        }
        ${classList("::-ms-input-placeholder")} { 
          --placeholder-opacity: 1;
          color: ${htmlColor};
          color: rgba(${rgbColor}, var(--placeholder-opacity));
        }
        ${classList("::placeholder")} {
          --placeholder-opacity: 1;
          color: ${htmlColor};
          color: rgba(${rgbColor}, var(--placeholder-opacity));
        }
      `;
      }
      return str;
    };

    let cssString = "";
    Object.entries(colors).forEach(([color, colorValue]) => {
      if (typeof colorValue === "string") {
        cssString += `${generatePlaceholderColor(color, colorValue)} `;
      } else if (typeof colorValue === "object") {
        Object.entries(colorValue).forEach(([key, value]) => {
          cssString += `${generatePlaceholderColor(`${color}-${key}`, value)} `;
        });
      }
    });
    cssString += getCssByOptions(
      opacity,
      (key, value) => `
        .${orientationPrefix}${prefix}-opacity-${key}::-webkit-input-placeholder {
          --placeholder-opacity: ${value};
        }
        .${orientationPrefix}${prefix}-opacity-${key}:-ms-input-placeholder {
          --placeholder-opacity: ${value};
        }
        .${orientationPrefix}${prefix}-opacity-${key}::-ms-input-placeholder {
          --placeholder-opacity: ${value};
        }
        .${orientationPrefix}${prefix}-opacity-${key}::placeholder {
          --placeholder-opacity: ${value};
        }
      `
    );
    return cssString;
  }
);

cssHash(() => responsiveCssString);
