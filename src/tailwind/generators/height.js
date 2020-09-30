import { cssHash } from "css-hash";

import { generateCssWithOptions } from "../utils";

import defaultConfigOptions from "../config";

export default function generateHeight(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix: globalPrefix, spacing } = configOptions;

  const prefix = `${globalPrefix}h`;
  const extraSpacing = {
    auto: "auto",
    full: "100%",
    screen: "100vh",
  };

  const responsiveCssString = generateCssWithOptions(
    ({ orientationPrefix, getCssByOptions }) => {
      let cssString = getCssByOptions(
        Object.assign(spacing, extraSpacing),
        (key, value) => `
          .${orientationPrefix}${prefix}-${key.replace("/", `\\/`)} {
            height: ${value}; 
          }
        `
      );
      cssString += `
        .${orientationPrefix}min-${prefix}-0 {
          min-height: 0;
        }
        .${orientationPrefix}min-${prefix}-full {
          min-height: 100%;
        }
        .${orientationPrefix}min-${prefix}-screen {
          min-height: 100vh;
        }
        .${orientationPrefix}max-${prefix}-full {
          max-height: 100%;
        }
        .${orientationPrefix}max-${prefix}-screen {
          max-height: 100vh;
        }
      `;
      return cssString;
    },
    configOptions
  );

  cssHash(() => responsiveCssString);
}
