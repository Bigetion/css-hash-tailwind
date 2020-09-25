import { cssHash } from "css-hash";

import { generateCss } from "../utils";

const prefix = "list";

const listStyleType = {
  none: "none",
  disc: "disc",
  decimal: "decimal",
};

const responsiveCssString = generateCss(({ orientationPrefix }) => {
  const generateTracking = () => {
    let str = "";
    Object.entries(listStyleType).forEach(([key, value]) => {
      str += `
        .${orientationPrefix}${prefix}-${key} {
          list-style-type: ${value};
        }
      `;
    });
    return str;
  };

  let cssString = generateTracking();
  cssString += `
    .${orientationPrefix}list-inside {
      list-style-position: inside;
    }
    .${orientationPrefix}list-outside {
      list-style-position: outside;
    }
  `;
  return cssString;
});

cssHash(() => responsiveCssString);
