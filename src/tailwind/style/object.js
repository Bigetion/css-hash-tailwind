import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix } = configOptions;

const prefix = `${globalPrefix}object`;

const objectFit = ["contain", "cover", "fill", "none", "scale-down"];
const objectPosition = [
  "bottom",
  "center",
  "left",
  "left-bottom",
  "left-top",
  "right",
  "right-bottom",
  "right-top",
  "top",
];

const responsiveCssString = generateCss(({ orientationPrefix }) => {
  const generateObjectFit = () => {
    let str = "";
    objectFit.forEach((item) => {
      str += `
        .${orientationPrefix}${prefix}-${item} {
          object-fit: ${item};
        }
      `;
    });
    return str;
  };

  const generateObjectPosition = () => {
    let str = "";
    objectPosition.forEach((item) => {
      str += `
        .${orientationPrefix}${prefix}-${item} {
          object-position: ${item.split("-").join(" ")};
        }
      `;
    });
    return str;
  };
  let cssString = generateObjectFit();
  cssString += generateObjectPosition();
  return cssString;
});

cssHash(() => responsiveCssString);
