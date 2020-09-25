import { cssHash } from "css-hash";

import { generateCss } from "../utils";

const prefix = "justify";

const justifyContent = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
};

const justifyItems = ["auto", "start", "center", "end", "stretch"];

const responsiveCssString = generateCss(({ orientationPrefix }) => {
  const generateJustifyContent = () => {
    let str = "";
    Object.entries(justifyContent).forEach(([key, value]) => {
      str += `
        .${orientationPrefix}${prefix}-${key} {
          justify-content: ${value};
        }
      `;
    });
    return str;
  };

  const generateJustifyItems = () => {
    let str = "";
    justifyItems.forEach((value) => {
      str += `
        .${orientationPrefix}${prefix}-items-${value} {
          justify-items: ${value};
        }
        .${orientationPrefix}${prefix}-self-${value} {
          justify-self: ${value};
        }
      `;
    });
    return str;
  };

  let cssString = generateJustifyContent();
  cssString += generateJustifyItems();
  return cssString;
});

cssHash(() => responsiveCssString);
