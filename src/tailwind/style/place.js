import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix } = configOptions;

const prefix = `${globalPrefix}place`;

const placeContent = {
  start: "start",
  end: "end",
  center: "center",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
  stretch: "stretch",
};

const placeItemsAndSelf = ["auto", "start", "center", "end", "stretch"];

const responsiveCssString = generateCss(
  ({ orientationPrefix, getCssByOptions }) => {
    let cssString = getCssByOptions(
      placeContent,
      (key, value) => `
        .${orientationPrefix}${prefix}-content-${key} {
          place-content: ${value};
        }
      `
    );
    cssString += getCssByOptions(
      placeItemsAndSelf,
      (key, value) => `
        .${orientationPrefix}${prefix}-items-${key} {
          place-items: ${value};
        }
        .${orientationPrefix}${prefix}-self-${key} {
          place-self: ${value};
        }
      `
    );
    return cssString;
  }
);

cssHash(() => responsiveCssString);
