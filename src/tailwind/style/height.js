import { cssHash } from "css-hash";

import { generateCss } from "../utils";

import configOptions from "../config";

const { prefix: globalPrefix, spacing } = configOptions;

const prefix = `${globalPrefix}h`;
const extraSpacing = {
  auto: "auto",
  full: "100%",
  screen: "100vh",
};

const responsiveCssString = generateCss(({ orientationPrefix }) => {
  const generateHeight = (key, value) => {
    return `
      .${orientationPrefix}${prefix}-${key.replace("/", `\\/`)} {
        height: ${value}; 
      }
    `;
  };

  const generateMinHeight = () => `
    .${orientationPrefix}min-${prefix}-0 {
      min-height: 0;
    }
    .${orientationPrefix}min-${prefix}-full {
      min-height: 100%;
    }
    .${orientationPrefix}min-${prefix}-screen {
      min-height: 100vh;
    }
  `;

  const generateMaxHeight = () => `
    .${orientationPrefix}max-${prefix}-full {
      max-height: 100%;
    }
    .${orientationPrefix}max-${prefix}-screen {
      max-height: 100vh;
    }
  `;

  let cssString = "";
  Object.entries(Object.assign(spacing, extraSpacing)).forEach(
    ([space, spaceValue]) => {
      cssString += generateHeight(space, spaceValue);
    }
  );
  cssString += generateMinHeight();
  cssString += generateMaxHeight();
  return cssString;
});

cssHash(() => responsiveCssString);
