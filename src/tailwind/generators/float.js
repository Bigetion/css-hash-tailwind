import { cssHash } from "css-hash";

import { generateCssWithOptions } from "../utils";
import defaultConfigOptions from "../config";

export default function generateFloat(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );
  const { prefix: globalPrefix } = configOptions;

  const prefix = `${globalPrefix}float`;

  const float = ["left", "right", "none"];

  const responsiveCssString = generateCssWithOptions(
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
    },
    configOptions
  );

  cssHash(() => responsiveCssString);
}
