import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix } = configOptions;

const prefix = `${globalPrefix}table`;

const objectFit = ["auto", "fixed"];

const responsiveCssString = generateCss(
  ({ orientationPrefix, getCssByOptions }) => {
    const cssString = getCssByOptions(
      objectFit,
      (key, value) => `
        .${orientationPrefix}${prefix}-${key} {
          table-layout: ${value};
        }
      `
    );
    return cssString;
  }
);

cssHash(() => responsiveCssString);
