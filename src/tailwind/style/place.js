import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix } = configOptions;

const prefix = `${globalPrefix}place`;

const placeContent = {
  start: "start",
  end: "end",
  center: "center",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
  stretch: "stretch",
};

const placeItems = ["auto", "start", "center", "end", "stretch"];

const responsiveCssString = generateCss(({ orientationPrefix }) => {
  const generatePlaceContent = () => {
    let str = "";
    Object.entries(placeContent).forEach(([key, value]) => {
      str += `
        .${orientationPrefix}${prefix}-content-${key} {
          place-content: ${value};
        }
      `;
    });
    return str;
  };

  const generatePlaceItems = () => {
    let str = "";
    placeItems.forEach((value) => {
      str += `
        .${orientationPrefix}${prefix}-items-${value} {
          place-items: ${value};
        }
        .${orientationPrefix}${prefix}-self-${value} {
          place-self: ${value};
        }
      `;
    });
    return str;
  };

  let cssString = generatePlaceContent();
  cssString += generatePlaceItems();
  return cssString;
});

cssHash(() => responsiveCssString);
