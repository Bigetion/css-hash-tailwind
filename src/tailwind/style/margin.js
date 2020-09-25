import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import { spacing } from "../constants";

const prefix = "m";
const extraSpacing = {
  auto: "auto",
};

const responsiveCssString = generateCss(({ pseudoClass }) => {
  const generateMargin = (key, value, isNegative) => {
    const negativePrefix = isNegative ? "-" : "";
    return `
      ${pseudoClass(`${negativePrefix}${prefix}-${key}`)} {
        margin: ${negativePrefix}${value};
      }
      ${pseudoClass(`${negativePrefix}${prefix}y-${key}`)} {
        margin-top: ${negativePrefix}${value};
        margin-bottom: ${negativePrefix}${value};
      }
      ${pseudoClass(`${negativePrefix}${prefix}x-${key}`)} {
        margin-left: ${negativePrefix}${value};
        margin-right: ${negativePrefix}${value};
      }
      ${pseudoClass(`${negativePrefix}${prefix}t-${key}`)} {
        margin-top: ${negativePrefix}${value};
      }
      ${pseudoClass(`${negativePrefix}${prefix}r-${key}`)} {
        margin-right: ${negativePrefix}${value};
      }
      ${pseudoClass(`${negativePrefix}${prefix}b-${key}`)} {
        margin-bottom: ${negativePrefix}${value};
      }
      ${pseudoClass(`${negativePrefix}${prefix}l-${key}`)} {
        margin-left: ${negativePrefix}${value};
      }
    `;
  };

  let cssString = "";
  Object.entries(Object.assign(spacing, extraSpacing)).forEach(
    ([space, spaceValue]) => {
      cssString += generateMargin(space, spaceValue);
      cssString += generateMargin(space, spaceValue, true);
    }
  );
  return cssString;
});

cssHash(() => responsiveCssString);
