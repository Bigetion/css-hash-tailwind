import { cssHash } from "css-hash";

import { generateCss } from "../utils";

const prefix = "overflow";

const overflow = ["auto", "hidden", "visible", "scroll"];

let cssString = generateCss(({ orientationPrefix }) => {
  const generateOverflow = () => {
    let str = "";
    overflow.forEach((item) => {
      str += `
      .${orientationPrefix}${prefix}-${item} {
        overflow: ${item};
      }
      .${orientationPrefix}${prefix}-x-${item} {
        overflow-x: ${item};
      }
      .${orientationPrefix}${prefix}-y-${item} {
        overflow-y: ${item};
      }
    `;
    });
    return str;
  };

  let cssString = generateOverflow();
  cssString += `
    .${orientationPrefix}scrolling-touch {
      -webkit-overflow-scrolling: touch;
    }
    .${orientationPrefix}scrolling-auto {
      -webkit-overflow-scrolling: auto;
    }
  `;
  return cssString;
});

cssHash(() => cssString);
