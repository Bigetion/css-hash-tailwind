import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix } = configOptions;

const alignContent = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
};

const alignItems = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  baseline: "baseline",
  stretch: "stretch",
};

const alignSelf = {
  auto: "auto",
  start: "flex-start",
  end: "flex-end",
  center: "center",
  stretch: "stretch",
};

const responsiveCssString = generateCss(({ orientationPrefix }) => {
  const generateAlignContent = () => {
    let str = "";
    Object.entries(alignContent).forEach(([key, value]) => {
      str += `
        .${orientationPrefix}${prefix}content-${key} {
          align-content: ${value};
        }
      `;
    });
    return str;
  };

  const generateAlignItems = () => {
    let str = "";
    Object.entries(alignItems).forEach(([key, value]) => {
      str += `
        .${orientationPrefix}${prefix}items-${key} {
          align-items: ${value};
        }
      `;
    });
    return str;
  };

  const generateAlignSelf = () => {
    let str = "";
    Object.entries(alignSelf).forEach(([key, value]) => {
      str += `
        .${orientationPrefix}${prefix}self-${key} {
          align-self: ${value};
        }
      `;
    });
    return str;
  };

  let cssString = generateAlignContent();
  cssString += generateAlignItems();
  cssString += generateAlignSelf();
  return cssString;
});

cssHash(() => responsiveCssString);
