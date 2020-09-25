import { cssHash } from "css-hash";

import { generateCss } from "../utils";

const position = ["static", "fixed", "absolute", "relative", "sticky"];

const trbl = [0, "auto"];

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
    trbl.forEach((value) => {
      str += `
        .${orientationPrefix}inset-${value} {
          top: ${value};
          right: ${value};
          bottom: ${value};
          left: ${value};
        }
        .${orientationPrefix}inset-x-${value} {
          right: ${value};
          left: ${value};
        }
        .${orientationPrefix}inset-y-${value} {
          top: ${value};
          bottom: ${value};
        }
        .${orientationPrefix}top-${value} {
          top: ${value};
        }
        .${orientationPrefix}right-${value} {
          right: ${value};
        }
        .${orientationPrefix}bottom-${value} {
          bottom: ${value};
        }
        .${orientationPrefix}left-${value} {
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
