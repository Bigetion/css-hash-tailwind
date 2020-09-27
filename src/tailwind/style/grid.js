import { cssHash } from "css-hash";

import { generateCss } from "../utils";

import configOptions from "../config";

const { prefix: globalPrefix, spacing } = configOptions;

const prefix = `${globalPrefix}grid`;

const gridColumnsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const gridRowsArray = [1, 2, 3, 4, 5, 6];
const gridAutoFlow = {
  row: "row",
  col: "column",
  "row-dense": "row dense",
  "col-dense": "column dense",
};

const responsiveCssString = generateCss(({ pseudoClass }) => {
  const generateGrid = (name, arrays) => {
    const shortName = name.substr(0, 3);
    const templateArrays = [...arrays, "none"];
    const startEndArrays = [...arrays, "auto"];

    let str = "";
    templateArrays.forEach((value) => {
      const v = value === "none" ? "none" : `repeat(${value}, minmax(0, 1fr))`;
      str += `
        ${pseudoClass(`${prefix}-${shortName}s-${value}`)} {
          grid-template-${name}s: ${v};
        }
      `;
    });

    const maxValue = startEndArrays.length;
    startEndArrays.forEach((value) => {
      const v = value !== "auto" ? `span ${value} / span ${value}` : value;
      str += `
        ${pseudoClass(
          `${globalPrefix}${shortName}${
            value !== "auto" ? "-span" : ""
          }-${value}`
        )} {
          grid-${name}: ${v};
        }
        ${pseudoClass(`${globalPrefix}${shortName}-start-${value}`)} {
          grid-${name}-start: ${value};
        }
        ${pseudoClass(`${globalPrefix}${shortName}-start-${maxValue}`)} {
          grid-${name}-start: ${maxValue};
        }
        ${pseudoClass(`${globalPrefix}${shortName}-end-${value}`)} {
          grid-${name}-end: ${value};
        }
        ${pseudoClass(`${globalPrefix}${shortName}-end-${maxValue}`)} {
          grid-${name}-end: ${maxValue};
        }
      `;
    });

    return str;
  };

  const generateGridAutoFlow = () => {
    let str = "";
    Object.entries(gridAutoFlow).forEach(([key, value]) => {
      str += `
        ${pseudoClass(`${prefix}-flow-${key}`)} {
          grid-auto-flow: ${value};
        }
      `;
    });
    return str;
  };

  const generateGap = (position) => {
    const p = position ? `-${position}` : "";
    let cr = "";
    if (position === "x") {
      cr = "column";
    }
    if (position === "y") {
      cr = "row";
    }
    let str = "";
    Object.entries(spacing).forEach(([key, value]) => {
      str += `
        ${pseudoClass(`${globalPrefix}gap${p}${key}`)} {
          ${cr}gap: ${value};
        }
      `;
    });
    return str;
  };

  let cssString = generateGrid("column", gridColumnsArray);
  cssString += generateGrid("row", gridRowsArray);
  cssString += generateGridAutoFlow();
  cssString += generateGap();
  cssString += generateGap("x");
  cssString += generateGap("y");
  return cssString;
});

cssHash(() => responsiveCssString);
