import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix, order } = configOptions;

const prefix = `${globalPrefix}flex`;

const flexDirection = {
  row: "row",
  "row-reverse": "row-reverse",
  col: "column",
  "col-reverse": "column-reverse",
};

const flexWrap = {
  wrap: "wrap",
  "wrap-reverse": "wrap-reverse",
  "no-wrap": "nowrap",
};

const flexSize = {
  1: "1 1 0",
  auto: "1 1 auto",
  initial: "0 1 auto",
  none: "none",
};

const flexGrow = {
  0: 0,
  "": 1,
};

const flexShrink = {
  0: 0,
  "": 1,
};

const responsiveCssString = generateCss(
  ({ orientationPrefix, getCssByOptions }) => {
    let cssString = getCssByOptions(
      flexDirection,
      (key, value) => `
        .${orientationPrefix}${prefix}-${key} {
          flex-direction: ${value};
        }
      `
    );
    cssString += getCssByOptions(
      flexWrap,
      (key, value) => `
        .${orientationPrefix}${prefix}-${key} {
          flex-wrap: ${value};
        }
      `
    );
    cssString += getCssByOptions(
      flexSize,
      (key, value) => `
        .${orientationPrefix}${prefix}-${key} {
          flex: ${value};
        }
      `
    );
    cssString += getCssByOptions(
      flexGrow,
      (key, value) => `
        .${orientationPrefix}${prefix}${key !== "" ? `-${key}` : ""} {
          flex-grow: ${value};
        }
      `
    );
    cssString += getCssByOptions(
      flexShrink,
      (key, value) => `
        .${orientationPrefix}${prefix}${key !== "" ? `-${key}` : ""} {
          flex-shrink: ${value};
        }
      `
    );
    cssString += getCssByOptions(
      order,
      (key, value) => `
        .${orientationPrefix}order-${key} {
          order: ${value};
        }
      `
    );
    return cssString;
  }
);

cssHash(() => responsiveCssString);
