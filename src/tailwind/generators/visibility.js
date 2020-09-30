import { cssHash } from "css-hash";

import { generateCssWithOptions } from "../utils";
import defaultConfigOptions from "../config";

export default function generateVisibility(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix } = configOptions;

  const responsiveCssString = generateCssWithOptions(
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
