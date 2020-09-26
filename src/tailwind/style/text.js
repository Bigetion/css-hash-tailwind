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
  ({ orientationPrefix, pseudoClass }) => {
    const generateTextAlign = () => {
      let str = "";
      alignment.forEach((align) => {
        str += `
          .${orientationPrefix}${prefix}-${align} {
            text-align: ${align};
          }
        `;
      });
      return str;
    };

    const generateTextOpacity = () => {
      let str = "";
      Object.entries(opacity).forEach(([key, value]) => {
        str += `
          .${orientationPrefix}${prefix}-opacity-${key} {
            --text-opacity: ${value};
          }
        `;
      });
      return str;
    };

    const generateTextDecoration = () => {
      let str = "";
      Object.entries(decoration).forEach(([key, value]) => {
        str += `
          .${orientationPrefix}${prefix}-${key} {
            text-decoration: ${value};
          }
        `;
      });
      return str;
    };

    const generateTextTransform = () => {
      let str = "";
      Object.entries(transform).forEach(([key, value]) => {
        str += `
          .${orientationPrefix}${globalPrefix}${key} {
            text-transform: ${value};
          }
        `;
      });
      return str;
    };

    const generateTextSize = () => {
      let str = "";
      Object.entries(fontSize).forEach(([key, value]) => {
        str += `
          .${orientationPrefix}${prefix}-${key} {
            font-size: ${value};
          }
        `;
      });
      return str;
    };

    const generateTextSmooth = () => `  
      .${orientationPrefix}${prefix}antialiased {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      .${orientationPrefix}${prefix}subpixel-antialiased {
        -webkit-font-smoothing: auto;
        -moz-osx-font-smoothing: auto;
      }
    `;

    const generateTextStyle = () => `  
      .${orientationPrefix}${prefix}italic {
        font-style: italic;
      }
      .${orientationPrefix}${prefix}not-italic {
        font-style: normal;
      }
    `;

    const generateTextWeight = () => {
      let str = "";
      Object.entries(fontWeight).forEach(([key, value]) => {
        str += `
          .${orientationPrefix}${globalPrefix}font-${key} {
            font-weight: ${value};
          }
        `;
      });
      return str;
    };

    const generateVerticalAlign = () => {
      let str = "";
      verticalAlignment.forEach((align) => {
        str += `
          .${orientationPrefix}${prefix}align-${align} {
            vertical-align: ${align};
          }
        `;
      });
      return str;
    };

    const generateWhitespace = () => {
      let str = "";
      Object.entries(whitespace).forEach(([key, value]) => {
        str += `
          .${orientationPrefix}${globalPrefix}whitespace-${key} {
            white-space: ${value};
          }
        `;
      });
      return str;
    };

    const generateWordBreak = () => `
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
    cssString += generateTextAlign();
    cssString += generateTextOpacity();
    cssString += generateTextDecoration();
    cssString += generateTextTransform();
    cssString += generateTextSize();
    cssString += generateTextSmooth();
    cssString += generateTextStyle();
    cssString += generateTextWeight();
    cssString += generateVerticalAlign();
    cssString += generateWhitespace();
    cssString += generateWordBreak();
    return cssString;
  }
);

cssHash(() => responsiveCssString);
