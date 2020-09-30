import { cssHash } from "css-hash";

import { generateCssWithOptions } from "../utils";
import defaultConfigOptions from "../config";

export default function generateOverscroll(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix: globalPrefix } = configOptions;

  const prefix = `${globalPrefix}overscroll`;

  const overscroll = ["auto", "contain", "none"];

  const responsiveCssString = generateCssWithOptions(
    ({ orientationPrefix, getCssByOptions }) => {
      const cssString = getCssByOptions(
        overscroll,
        (key, value) => `
          .${orientationPrefix}${prefix}-${key} {
            overscroll-behavior: ${value};
          }
          .${orientationPrefix}${prefix}-x-${key} {
            overscroll-behavior-x: ${value};
          }
          .${orientationPrefix}${prefix}-y-${key} {
            overscroll-behavior-y: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  cssHash(() => responsiveCssString);
}
