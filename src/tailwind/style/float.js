import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix } = configOptions;

const prefix = `${globalPrefix}float`;

const float = ["left", "right", "none"];

const responsiveCssString = generateCss(({ orientationPrefix }) => {
  const generateFloat = () => {
    let str = "";
    float.forEach((item) => {
      str += `
        .${orientationPrefix}${prefix}-${item} {
          float: ${item};
        }
      `;
    });
    return str;
  };

  let cssString = generateFloat();
  cssString += `
    .${orientationPrefix}clearfix:after {
      content: "";
      display: table;
      clear: both;
    }
  `;
  return cssString;
});

cssHash(() => responsiveCssString);
