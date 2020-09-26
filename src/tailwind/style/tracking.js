import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix } = configOptions;

const prefix = `${globalPrefix}tracking`;

const letterSpacing = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
};

const responsiveCssString = generateCss(({ orientationPrefix }) => {
  const generateTracking = () => {
    let str = "";
    Object.entries(letterSpacing).forEach(([key, value]) => {
      str += `
        .${orientationPrefix}${prefix}-${key} {
          letter-spacing: ${value};
        }
      `;
    });
    return str;
  };

  const cssString = generateTracking();
  return cssString;
});

cssHash(() => responsiveCssString);
