import { cssHash } from "css-hash";

import { generateCss } from "../utils";

const display = [
  "block",
  "inline-block",
  "inline",
  "flex",
  "inline-flex",
  "table",
  "table-caption",
  "table-cell",
  "table-column",
  "table-column-group",
  "table-header-group",
  "table-footer-group",
  "table-row-group",
  "table-row",
  "flow-root",
  "grid",
  "inline-grid",
  "contents",
  "none",
];

const responsiveCssString = generateCss(({ pseudoClass }) => {
  const generateDisplay = () => {
    let str = "";
    display.forEach((value) => {
      str += `
        ${pseudoClass(`${value === "none" ? "hidden" : value}`)} {
          display: ${value};
        }
      `;
    });
    return str;
  };

  let cssString = generateDisplay();
  return cssString;
});

cssHash(() => responsiveCssString);
