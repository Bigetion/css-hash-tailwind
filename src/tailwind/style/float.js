import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix } = configOptions;

const prefix = `${globalPrefix}float`;

const float = ["left", "right", "none"];

const responsiveCssString = generateCss(
  ({ orientationPrefix, getCssByOptions }) => {
    let cssString = getCssByOptions(
      float,
      (key, value) => `
        .${orientationPrefix}${prefix}-${key} {
          float: ${value};
        }
      `
    );
    cssString += `
      .${orientationPrefix}${globalPrefix}clearfix:after {
        content: "";
        display: table;
        clear: both;
      }
    `;
    return cssString;
  }
);

cssHash(() => responsiveCssString);
