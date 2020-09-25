import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import { spacing } from "../constants";

const prefix = "m";
const extraSpacing = {
  auto: "auto",
};

const responsiveCssString = generateCss(({ pseudoClass }) => {
  const generateMargin = (key, value) => {
    return `
      ${pseudoClass(`${prefix}-${key}`)} {
        margin: ${value};
      }
      ${pseudoClass(`${prefix}y-${key}`)} {
        margin-top: ${value};
        margin-bottom: ${value};
      }
      ${pseudoClass(`${prefix}x-${key}`)} {
        margin-left: ${value};
        margin-right: ${value};
      }
      ${pseudoClass(`${prefix}t-${key}`)} {
        margin-top: ${value};
      }
      ${pseudoClass(`${prefix}r-${key}`)} {
        margin-right: ${value};
      }
      ${pseudoClass(`${prefix}b-${key}`)} {
        margin-bottom: ${value};
      }
      ${pseudoClass(`${prefix}l-${key}`)} {
        margin-left: ${value};
      }
    `;
  };

  let cssString = "";
  Object.entries(Object.assign(spacing, extraSpacing)).forEach(
    ([space, spaceValue]) => {
      cssString += generateMargin(space, spaceValue);
    }
  );
  return cssString;
});

cssHash(() => responsiveCssString);
