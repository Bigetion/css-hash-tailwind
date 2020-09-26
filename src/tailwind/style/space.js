import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix, spacing } = configOptions;

const prefix = `${globalPrefix}space`;

const responsiveCssString = generateCss(({ orientationPrefix }) => {
  const generateSpace = (position, key, value) => {
    let spacePosition = "x";
    let margin1 = "left";
    let margin2 = "right";
    if (position === "y") {
      spacePosition = "y";
      margin1 = "top";
      margin2 = "bottom";
    }
    return `
      .${orientationPrefix}${prefix}-${spacePosition}-${key} > :not(template) ~ :not(template) {
        --space-${spacePosition}-reverse: 0;
        margin-${margin1}: calc(${value} * calc(1 - var(--space-${spacePosition}-reverse)));
        margin-${margin2}: calc(${value} * var(--space-${spacePosition}-reverse));
      }
      .${orientationPrefix}-${prefix}-${key} > :not(template) ~ :not(template) {
        --space-${spacePosition}-reverse: 0;
        margin-${margin1}: calc(-${value} * calc(1 - var(--space-${spacePosition}-reverse)));
        margin-${margin2}: calc(-${value} * var(--space-${spacePosition}-reverse));
      }
    `;
  };

  const generateSpacePx = (position) => {
    let spacePosition = "x";
    let margin1 = "left";
    let margin2 = "right";
    if (position === "y") {
      spacePosition = "y";
      margin1 = "top";
      margin2 = "bottom";
    }
    return `
      .${prefix}-${spacePosition}-px > :not(template) ~ :not(template) {
        --space-${spacePosition}-reverse: 0;
        margin-${margin1}: calc(1px * calc(1 - var(--space-${spacePosition}-reverse)));
        margin-${margin2}: calc(1px * var(--space-${spacePosition}-reverse));
      }
      .-${prefix}-${spacePosition}-px > :not(template) ~ :not(template) {
        --space-${spacePosition}-reverse: 0;
        margin-${margin1}: calc(-1px * calc(1 - var(--space-${spacePosition}-reverse)));
        margin-${margin2}: calc(-1px * var(--space-${spacePosition}-reverse));
      }
      .${prefix}-${spacePosition}-reverse > :not(template) ~ :not(template) {
        --space-${spacePosition}-reverse: 1;
      }
    `;
  };

  let cssString = "";
  Object.entries(spacing).forEach(([space, spaceValue]) => {
    cssString += generateSpace("x", space, spaceValue);
    cssString += generateSpace("y", space, spaceValue);

    cssString += generateSpacePx("x");
    cssString += generateSpacePx("y");
  });
  return cssString;
});

cssHash(() => responsiveCssString);
