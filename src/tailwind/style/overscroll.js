import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix } = configOptions;

const prefix = `${globalPrefix}overscroll`;

const overscroll = ["auto", "contain", "none"];

const responsiveCssString = generateCss(({ orientationPrefix }) => {
  const generateOverscroll = () => {
    let str = "";
    overscroll.forEach((item) => {
      str += `
        .${orientationPrefix}${prefix}-${item} {
          overscroll-behavior: ${item};
        }
        .${orientationPrefix}${prefix}-x-${item} {
          overscroll-behavior-x: ${item};
        }
        .${orientationPrefix}${prefix}-y-${item} {
          overscroll-behavior-y: ${item};
        }
      `;
    });
    return str;
  };

  const cssString = generateOverscroll();
  return cssString;
});

cssHash(() => responsiveCssString);
