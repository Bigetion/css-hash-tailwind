import { cssHash } from "css-hash";

import { generateCss, hexToRgb } from "../utils";
import configOptions from "../config";

const {
  prefix: globalPrefix,
  colors,
  opacity,
  fontSize,
  fontWeight,
} = configOptions;

const prefix = `${globalPrefix}text`;

const alignment = ["left", "center", "right", "justify"];
const decoration = {
  underline: "underline",
  "line-through": "line-through",
  "no-underline": "none",
};
const transform = {
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
  "normal-case": "none",
};
const verticalAlignment = [
  "baseline",
  "top",
  "middle",
  "bottom",
  "text-top",
  "text-bottom",
];
const whitespace = {
  normal: "normal",
  "no-wrap": "nowrap",
  pre: "pre",
  "pre-line": "pre-line",
  "pre-wrap": "pre-wrap",
};

const responsiveCssString = generateCss(
  ({ orientationPrefix, pseudoClass, getCssByOptions }) => {
    const generateTextColor = (name, htmlColor) => {
      let str = "";
      if (htmlColor === "transparent") {
        str += `
          ${pseudoClass(`${prefix}-${name}`)} {
            color: transparent;
          }
        `;
      } else {
        const rgbColor = hexToRgb(htmlColor);
        str += `
          ${pseudoClass(`${prefix}-${name}`)} {
            --text-opacity: 1;
            color: ${htmlColor};
            color: rgba(${rgbColor}, var(--text-opacity));
          }
        `;
      }
      return str;
    };

    let cssString = "";
    Object.entries(colors).forEach(([color, colorValue]) => {
      if (typeof colorValue === "string") {
        cssString += `${generateTextColor(color, colorValue)} `;
      } else if (typeof colorValue === "object") {
        Object.entries(colorValue).forEach(([key, value]) => {
          cssString += `${generateTextColor(`${color}-${key}`, value)} `;
        });
      }
    });
    cssString += getCssByOptions(
      alignment,
      (key, value) => `
        .${orientationPrefix}${prefix}-${key} {
          text-align: ${value};
        }
      `
    );
    cssString += getCssByOptions(
      opacity,
      (key, value) => `
        .${orientationPrefix}${prefix}-opacity-${key} {
          --text-opacity: ${value};
        }
      `
    );
    cssString += getCssByOptions(
      decoration,
      (key, value) => `
        .${orientationPrefix}${prefix}-${key} {
          text-decoration: ${value};
        }
      `
    );
    cssString += getCssByOptions(
      transform,
      (key, value) => `
        .${orientationPrefix}${globalPrefix}${key} {
          text-transform: ${value};
        }
      `
    );
    cssString += getCssByOptions(
      fontSize,
      (key, value) => `
        .${orientationPrefix}${prefix}-${key} {
          font-size: ${value};
        }
      `
    );
    cssString += getCssByOptions(
      fontWeight,
      (key, value) => `
        .${orientationPrefix}${globalPrefix}font-${key} {
          font-weight: ${value};
        }
      `
    );
    cssString += getCssByOptions(
      verticalAlignment,
      (key, value) => `
        .${orientationPrefix}${prefix}align-${key} {
          vertical-align: ${value};
        }
      `
    );
    cssString += getCssByOptions(
      whitespace,
      (key, value) => `
        .${orientationPrefix}${globalPrefix}whitespace-${key} {
          white-space: ${value};
        }
      `
    );
    cssString += `
      .${orientationPrefix}${prefix}antialiased {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      .${orientationPrefix}${prefix}subpixel-antialiased {
        -webkit-font-smoothing: auto;
        -moz-osx-font-smoothing: auto;
      }
      .${orientationPrefix}${prefix}italic {
        font-style: italic;
      }
      .${orientationPrefix}${prefix}not-italic {
        font-style: normal;
      }
      .${orientationPrefix}${globalPrefix}break-normal {
        overflow-wrap: normal;
        word-break: normal;
      }
      .${orientationPrefix}${globalPrefix}break-words {
        overflow-wrap: break-word;
      }
      .${orientationPrefix}${globalPrefix}break-all {
        word-break: break-all;
      }
      .${orientationPrefix}${globalPrefix}truncate {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `;
    return cssString;
  }
);

cssHash(() => responsiveCssString);
