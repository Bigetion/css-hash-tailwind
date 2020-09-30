import { cssHash } from "css-hash";

import { generateCss2 } from "../utils";
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

  const responsiveCssString = generateCss2(
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
