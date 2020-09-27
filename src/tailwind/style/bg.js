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
  ({ orientationPrefix, pseudoClass }) => {
    const generateBackgroundAttachment = () => {
      let str = "";
      backgroundAttachment.forEach((item) => {
        str += `
          .${orientationPrefix}${prefix}-${item} {
            background-attachment: ${item};
          }
        `;
      });
      return str;
    };

    const generateBackgroundClip = () => {
      let str = "";
      backgroundClip.forEach((item) => {
        str += `
          .${orientationPrefix}${prefix}-clip-${item} {
            background-clip: ${item}${item !== "text" ? "-box" : ""};
          }
        `;
      });
      return str;
    };

    const generateBackgroundOpacity = () => {
      let str = "";
      Object.entries(opacity).forEach(([key, value]) => {
        str += `
          .${orientationPrefix}${prefix}-opacity-${key} {
            --bg-opacity: ${value};
          }
        `;
      });
      return str;
    };

    const generateBackgroundPosition = () => {
      let str = "";
      backgroundPosition.forEach((item) => {
        str += `
          .${orientationPrefix}${prefix}-${item} {
            background-position: ${item.split("-").join(" ")};
          }
        `;
      });
      return str;
    };

    const generateBackgroundRepeat = () => {
      let str = "";
      Object.entries(backgroundRepeat).forEach(([key, value]) => {
        str += `
          .${orientationPrefix}${prefix}-${key} {
            background-repeat: ${value};
          }
        `;
      });
      return str;
    };

    const generateBackgroundSize = () => {
      let str = "";
      backgroundSize.forEach((item) => {
        str += `
          .${orientationPrefix}${prefix}-${item} {
            background-size: ${item};
          }
        `;
      });
      return str;
    };

    const generateBackgroundImage = () => {
      let str = `
        .${orientationPrefix}${prefix}-none {
          background-image: none;
        }
      `;
      return str;
    };

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
    Object.entries(colors).forEach(([color, colorValue]) => {
      if (typeof colorValue === "string") {
        cssString += `${generateBgColor(color, colorValue)} `;
      } else if (typeof colorValue === "object") {
        Object.entries(colorValue).forEach(([key, value]) => {
          cssString += `${generateBgColor(`${color}-${key}`, value)} `;
        });
      }
    });
    cssString += generateBackgroundAttachment();
    cssString += generateBackgroundClip();
    cssString += generateBackgroundOpacity();
    cssString += generateBackgroundPosition();
    cssString += generateBackgroundRepeat();
    cssString += generateBackgroundSize();
    cssString += generateBackgroundImage();
    return cssString;
  }
);

cssHash(() => responsiveCssString);
