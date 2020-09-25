import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import { screens, spacing } from "../constants";

const prefix = "w";
const extraSpacing = {
  auto: "auto",
  "1/2": "50%",
  "1/3": "33.333333%",
  "2/3": "66.666667%",
  "1/4": "25%",
  "2/4": "50%",
  "3/4": "75%",
  "1/5": "20%",
  "2/5": "40%",
  "3/5": "60%",
  "4/5": "80%",
  "1/6": "16.666667%",
  "2/6": "33.333333%",
  "3/6": "50%",
  "4/6": "66.666667%",
  "5/6": "83.333333%",
  "1/12": "8.333333%",
  "2/12": "16.666667%",
  "3/12": "25%",
  "4/12": "33.333333%",
  "5/12": "41.666667%",
  "6/12": "50%",
  "7/12": "58.333333%",
  "8/12": "66.666667%",
  "9/12": "75%",
  "10/12": "83.333333%",
  "11/12": "91.666667%",
  full: "100%",
  screen: "100vw",
};

const maxWidth = {
  none: "none",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32",
  xl: "36",
  "2xl": "42",
  "3xl": "48",
  "4xl": "56",
  "5xl": "64",
  "6xl": "72",
  full: "100%",
};

const responsiveCssString = generateCss(({ orientationPrefix }) => {
  const generateWidth = (key, value) => {
    return `
    .${orientationPrefix}${prefix}-${key.replace("/", `\\/`)} {
      width: ${value}; 
    }
  `;
  };

  const generateMinWidth = () => `
  .${orientationPrefix}min-${prefix}-0 {
    min-width: 0;
  }
  .${orientationPrefix}min-${prefix}-full {
    min-width: 100%;
  }
  .${orientationPrefix}min-${prefix}-screen {
    min-width: 100vw;
  }
`;

  const generateMaxWidth = () => {
    let str = "";
    Object.entries(maxWidth).forEach(([key, value]) => {
      str += `
        .${orientationPrefix}max-${prefix}-${key} {
          max-width: ${value};
        }
     `;
    });
    Object.entries(screens).forEach(([key, value]) => {
      str += `
        .${orientationPrefix}max-${prefix}-screen-${key} {
          max-width: ${value};
        }
      `;
    });
    return str;
  };

  let cssString = "";
  Object.entries(Object.assign(spacing, extraSpacing)).forEach(
    ([space, spaceValue]) => {
      cssString += generateWidth(space, spaceValue);
    }
  );
  cssString += generateMinWidth();
  cssString += generateMaxWidth();
  return cssString;
});

cssHash(() => responsiveCssString);
