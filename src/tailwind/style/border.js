import { cssHash } from "css-hash";

import { generateCss, hexToRgb } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix, colors, opacity } = configOptions;

const prefix = `${globalPrefix}border`;

const borderRadius = {
  none: "0",
  sm: "0.125rem",
  default: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  full: "9999px",
};

const borderWidth = {
  default: "1px",
  0: "0",
  2: "2px",
  4: "4px",
  8: "8px",
};

const borderStyle = ["solid", "dashed", "dotted", "double", "none"];

const responsiveCssString = generateCss(
  ({ orientationPrefix, pseudoClass }) => {
    const generateBorderRadius = () => {
      let str = "";
      Object.entries(borderRadius).forEach(([key, value]) => {
        const k = key !== "default" ? `-${key}` : "";

        str += `
          ${pseudoClass(`rounded${k}`)} {
            border-radius: ${value};
          }
          ${pseudoClass(`rounded-t${k}`)} {
            border-top-left-radius: ${value};
            border-top-right-radius: ${value};
          }
          ${pseudoClass(`rounded-r${k}`)} {
            border-top-right-radius: ${value};
            border-bottom-right-radius: ${value};
          }
          ${pseudoClass(`rounded-b${k}`)} {
            border-bottom-right-radius: ${value};
            border-bottom-left-radius: ${value};
          }
          ${pseudoClass(`rounded-l${k}`)} {
            border-top-left-radius: ${value};
            border-bottom-left-radius: ${value};
          }
          ${pseudoClass(`rounded-tl${k}`)} {
            border-top-left-radius: ${value};
          }
          ${pseudoClass(`rounded-tr${k}`)} {
            border-top-right-radius: ${value};
          }
          ${pseudoClass(`rounded-br${k}`)} {
            border-bottom-right-radius: ${value};
          }
          ${pseudoClass(`rounded-bl${k}`)} {
            border-bottom-left-radius: ${value};
          }
        `;
      });
      return str;
    };

    const generateBorderWidth = () => {
      let str = "";

      Object.entries(borderWidth).forEach(([key, value]) => {
        const k = key !== "default" ? `-${key}` : "";

        str += `
          ${pseudoClass(`${prefix}${k}`)} {
            border-width: ${value};
          }
          ${pseudoClass(`${prefix}-t${k}`)} {
            border-top-width: ${value};
          }
          ${pseudoClass(`${prefix}-r${k}`)} {
            border-right-width: ${value};
          }
          ${pseudoClass(`${prefix}-b${k}`)} {
            border-bottom-width: ${value};
          }
          ${pseudoClass(`${prefix}-l${k}`)} {
            border-left-width: ${value};
          }
        `;
      });
      return str;
    };

    const generateBorderColor = (name, htmlColor) => {
      let str = "";
      if (htmlColor === "transparent") {
        str += `
          ${pseudoClass(`${prefix}-${name}`)} {
            border-color: transparent;
          }
        `;
      } else {
        const rgbColor = hexToRgb(htmlColor);
        str += `
          ${pseudoClass(`${prefix}-${name}`)} {
            --border-opacity: 1;
            border-color: ${htmlColor};
            border-color: rgba(${rgbColor}, var(--border-opacity));
          }
        `;
      }
      return str;
    };

    const generateBorderOpacity = () => {
      let str = "";
      Object.entries(opacity).forEach(([key, value]) => {
        str += `
          .${orientationPrefix}${prefix}-opacity-${key} {
            --border-opacity: ${value};
          }
        `;
      });
      return str;
    };

    const generateBorderStyle = () => {
      let str = "";
      borderStyle.forEach((value) => {
        str += `
          ${pseudoClass(`${prefix}-${value}`)} {
            border-style: ${value};
          }
        `;
      });
      return str;
    };

    let cssString = generateBorderRadius();
    cssString += generateBorderWidth();

    Object.entries(colors).forEach(([color, colorValue]) => {
      if (typeof colorValue === "string") {
        cssString += `${generateBorderColor(color, colorValue)} `;
      } else if (typeof colorValue === "object") {
        Object.entries(colorValue).forEach(([key, value]) => {
          cssString += `${generateBorderColor(`${color}-${key}`, value)} `;
        });
      }
    });

    cssString += generateBorderOpacity();

    cssString += generateBorderStyle();
    return cssString;
  }
);

cssHash(() => responsiveCssString);
