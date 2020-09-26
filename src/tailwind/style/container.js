import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix, screens } = configOptions;

const prefix = `${globalPrefix}container`;

const responsiveCssString = generateCss(({ orientationPrefix }) => {
  const generateContainer = () => {
    let str = `
      .${orientationPrefix}${prefix} {
        width: 100%;
      }
    `;
    Object.entries(screens).forEach((screenItem) => {
      str += `
        @media (min-width: ${screenItem[1]}) {
          .${orientationPrefix}${prefix} {
            max-width: ${screenItem[1]};
          }
        }
      `;
    });
    return str;
  };

  const cssString = generateContainer();
  return cssString;
});

cssHash(() => responsiveCssString);
