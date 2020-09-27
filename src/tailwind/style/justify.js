import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix } = configOptions;

const prefix = `${globalPrefix}justify`;

const justifyContent = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
};

const justifyItemsAndSelf = ["auto", "start", "center", "end", "stretch"];

const responsiveCssString = generateCss(
  ({ orientationPrefix, getCssByOptions }) => {
    let cssString = getCssByOptions(
      justifyContent,
      (key, value) => `
        .${orientationPrefix}${prefix}-${key} {
          justify-content: ${value};
        }
      `
    );
    cssString += getCssByOptions(
      justifyItemsAndSelf,
      (key, value) => `
        .${orientationPrefix}${prefix}-items-${key} {
          justify-items: ${value};
        }
        .${orientationPrefix}${prefix}-self-${key} {
          justify-self: ${value};
        }
      `
    );
    return cssString;
  }
);

cssHash(() => responsiveCssString);
