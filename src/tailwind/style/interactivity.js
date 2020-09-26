import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix } = configOptions;

const cursor = [
  "auto",
  "default",
  "pointer",
  "wait",
  "text",
  "move",
  "not-allowed",
];

const responsiveCssString = generateCss(({ pseudoClass }) => {
  const generateAppearance = () => `    
    ${pseudoClass(`${prefix}appearance-none`)} {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
  `;

  const generateCursor = () => {
    let str = "";
    cursor.forEach((value) => {
      str += `
        ${pseudoClass(`${prefix}cursor-${value}`)} {
          cursor: ${value};
        }
      `;
    });
    return str;
  };

  const generateOutline = () => `    
    ${pseudoClass(`${prefix}outline-none`)} {
      outline: 0;
    }
  `;

  const generatePointerEvents = () => `    
    ${pseudoClass(`${prefix}pointer-events-none`)} {
      pointer-events: none;
    }
    ${pseudoClass(`${prefix}pointer-events-auto`)} {
      pointer-events: auto;
    }
  `;

  const generateResize = () => `    
    ${pseudoClass(`${prefix}resize-none`)} {
      resize: none;
    }
    ${pseudoClass(`${prefix}resize-y`)} {
      resize: vertical;
    }
    ${pseudoClass(`${prefix}resize-x`)} {
      resize: horizontal;
    }
    ${pseudoClass(`${prefix}resize`)} {
      resize: both;
    }
  `;

  const generateUserSelect = () => `    
    ${pseudoClass(`${prefix}select-none`)} {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    ${pseudoClass(`${prefix}select-text`)} {
      -webkit-user-select: text;
      -moz-user-select: text;
      -ms-user-select: text;
      user-select: text;
    }
    ${pseudoClass(`${prefix}select-all`)} {
      -webkit-user-select: all;
      -moz-user-select: all;
      -ms-user-select: all;
      user-select: all;
    }
    ${pseudoClass(`${prefix}select-auto`)} {
      -webkit-user-select: auto;
      -moz-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
  `;

  let cssString = generateAppearance();
  cssString += generateCursor();
  cssString += generateOutline();
  cssString += generatePointerEvents();
  cssString += generateResize();
  cssString += generateUserSelect();
  return cssString;
});

cssHash(() => responsiveCssString);
