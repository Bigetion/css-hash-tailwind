import { cssHash } from "css-hash";

import { generateCss2 } from "../utils";
import defaultConfigOptions from "../config";

export default function generateVisibility(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix } = configOptions;

  const responsiveCssString = generateCss2(
    ({ orientationPrefix }) => `
      .${orientationPrefix}${prefix}visible {
        visibility: visible;
      }
      .${orientationPrefix}${prefix}invisible {
        visibility: hidden;
      }
    `,
    configOptions
  );

  cssHash(() => responsiveCssString);
}
