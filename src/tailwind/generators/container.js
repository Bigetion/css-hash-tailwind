import { cssHash } from "css-hash";

import { generateCss2 } from "../utils";
import defaultConfigOptions from "../config";

export default function generateContainer(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );
  const { prefix: globalPrefix = "", screens } = configOptions;

  const prefix = `${globalPrefix}container`;

  const responsiveCssString = generateCss2(({ orientationPrefix }) => {
    let cssString = `
      .${orientationPrefix}${prefix} {
        width: 100%;
      }
    `;
    Object.entries(screens).forEach((screenItem) => {
      cssString += `
        @media (min-width: ${screenItem[1]}) {
          .${orientationPrefix}${prefix} {
            max-width: ${screenItem[1]};
          }
        }
      `;
    });
    return cssString;
  }, configOptions);

  cssHash(() => responsiveCssString);
}
