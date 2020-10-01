import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix, listStyleType } = configOptions;

const prefix = `${globalPrefix}list`;

const responsiveCssString = generateCss(
  ({ orientationPrefix, getCssByOptions }) => {
    let cssString = getCssByOptions(
      listStyleType,
      (key, value) => `
        .${orientationPrefix}${prefix}-${key} {
          list-style-type: ${value};
        }
      `
    );
    cssString += `
      .${orientationPrefix}list-inside {
        list-style-position: inside;
      }
      .${orientationPrefix}list-outside {
        list-style-position: outside;
      }
    `;
    return cssString;
  }
);

cssHash(() => responsiveCssString);
