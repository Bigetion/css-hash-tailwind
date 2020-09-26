import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix } = configOptions;

const prefix = `${globalPrefix}leading`;

const lineHeight = Object.assign(
  [3, 4, 5, 6, 7, 8, 9, 10].reduce(
    (currentObj, size) =>
      Object.assign(currentObj, { [size]: `${size / 4}rem` }),
    {}
  ),
  {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  }
);

const responsiveCssString = generateCss(({ orientationPrefix }) => {
  const generateLeading = () => {
    let str = "";
    Object.entries(lineHeight).forEach(([key, value]) => {
      str += `
        .${orientationPrefix}${prefix}-${key} {
          line-height: ${value};
        }
      `;
    });
    return str;
  };

  const cssString = generateLeading();
  return cssString;
});

cssHash(() => responsiveCssString);
