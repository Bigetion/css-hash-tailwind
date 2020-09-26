import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix } = configOptions;

const prefix = `${globalPrefix}overflow`;

const overflow = ["auto", "hidden", "visible", "scroll"];

let responsiveCssString = generateCss(({ orientationPrefix }) => {
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
    .${orientationPrefix}${globalPrefix}scrolling-touch {
      -webkit-overflow-scrolling: touch;
    }
    .${orientationPrefix}${globalPrefix}scrolling-auto {
      -webkit-overflow-scrolling: auto;
    }
  `;
  return cssString;
});

cssHash(() => responsiveCssString);
