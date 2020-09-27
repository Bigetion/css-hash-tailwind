import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix, screens } = configOptions;

const prefix = `${globalPrefix}container`;

const responsiveCssString = generateCss(({ orientationPrefix }) => {
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
});

cssHash(() => responsiveCssString);
