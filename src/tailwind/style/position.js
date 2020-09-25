import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import { spacing } from "../constants";

const position = ["static", "fixed", "absolute", "relative", "sticky"];

const positionOptions = Object.assign(spacing, {
  0: "0",
  auto: "auto",
});

const responsiveCssString = generateCss(({ orientationPrefix }) => {
  const generatePosition = () => {
    let str = "";
    position.forEach((value) => {
      str += `
      .${orientationPrefix}${value} {
        position: ${value};
      }
    `;
    });
    return str;
  };

  const generateTRBL = () => {
    let str = "";
    Object.entries(positionOptions).forEach(([key, value]) => {
      str += `
        .${orientationPrefix}inset-${key} {
          top: ${value};
          right: ${value};
          bottom: ${value};
          left: ${value};
        }
        .${orientationPrefix}inset-x-${key} {
          right: ${value};
          left: ${value};
        }
        .${orientationPrefix}inset-y-${key} {
          top: ${value};
          bottom: ${value};
        }
        .${orientationPrefix}top-${key} {
          top: ${value};
        }
        .${orientationPrefix}right-${key} {
          right: ${value};
        }
        .${orientationPrefix}bottom-${key} {
          bottom: ${value};
        }
        .${orientationPrefix}left-${key} {
          left: ${value};
        }
      `;
    });
    return str;
  };

  let cssString = generatePosition();
  cssString += generateTRBL();
  return cssString;
});

cssHash(() => responsiveCssString);
