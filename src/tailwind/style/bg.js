import { cssHash } from "css-hash";

import { generateCss, hexToRgb } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix, colors, opacity } = configOptions;

const prefix = `${globalPrefix}bg`;

const backgroundAttachment = ["fixed", "local", "scroll"];
const backgroundClip = ["border", "padding", "content", "text"];
const backgroundPosition = [
  "bottom",
  "center",
  "left",
  "left-bottom",
  "left-top",
  "right",
  "right-bottom",
  "right-top",
  "top",
];
const backgroundRepeat = {
  repeat: "repeat",
  "no-repeat": "no-repeat",
  "repeat-x": "repeat-x",
  "repeat-y": "repeat-y",
  "repeat-round": "round",
  "repeat-space": "space",
};
const backgroundSize = ["auto", "cover", "contain"];

const responsiveCssString = generateCss(
  ({ orientationPrefix, pseudoClass, getCssByOptions }) => {
    const generateBgColor = (name, htmlColor) => {
      let str = "";
      if (htmlColor === "transparent") {
        str += `
          ${pseudoClass(`${prefix}-${name}`)} {
            background-color: transparent;
          }
        `;
      } else {
        const rgbColor = hexToRgb(htmlColor);
        str += `
          ${pseudoClass(`${prefix}-${name}`)} {
            --bg-opacity: 1;
            background-color: ${htmlColor};
            background-color: rgba(${rgbColor}, var(--bg-opacity));
          }
        `;
      }
      return str;
    };

    let cssString = "";
    Object.entries(colors).forEach(([key1, value1]) => {
      if (typeof value1 === "string") {
        cssString += `${generateBgColor(key1, value1)} `;
      } else if (typeof value1 === "object") {
        Object.entries(value1).forEach(([key2, value2]) => {
          cssString += `${generateBgColor(`${key1}-${key2}`, value2)} `;
        });
      }
    });
    cssString += getCssByOptions(
      backgroundAttachment,
      (key, value) => `
        .${orientationPrefix}${prefix}-${key} {
          background-attachment: ${value};
        }
      `
    );
    cssString += getCssByOptions(
      backgroundClip,
      (key, value) => `
        .${orientationPrefix}${prefix}-clip-${key} {
          background-clip: ${value !== "text" ? `${value}-box` : value};
        }  
      `
    );
    cssString += getCssByOptions(
      opacity,
      (key, value) => `
        .${orientationPrefix}${prefix}-opacity-${key} {
          --bg-opacity: ${value};
        }
      `
    );
    cssString += getCssByOptions(
      backgroundPosition,
      (key, value) => `
        .${orientationPrefix}${prefix}-${key} {
          background-position: ${value.split("-").join(" ")};
        }
      `
    );
    cssString += getCssByOptions(
      backgroundRepeat,
      (key, value) => `
        .${orientationPrefix}${prefix}-${key} {
          background-repeat: ${value};
        }  
      `
    );
    cssString += getCssByOptions(
      backgroundSize,
      (key, value) => `
        .${orientationPrefix}${prefix}-${key} {
          background-size: ${value};
        }
      `
    );
    cssString += `
      .${orientationPrefix}${prefix}-none {
        background-image: none;
      }
    `;
    return cssString;
  }
);

cssHash(() => responsiveCssString);
