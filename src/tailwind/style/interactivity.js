import { cssHash } from "css-hash";

import { generateCss } from "../utils";

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
    ${pseudoClass("appearance-none")} {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
  `;

  const generateCursor = () => {
    let str = "";
    cursor.forEach((value) => {
      str += `
        ${pseudoClass(`cursor-${value}`)} {
          cursor: ${value};
        }
      `;
    });
    return str;
  };

  const generateOutline = () => `    
    ${pseudoClass("outline-none")} {
      outline: 0;
    }
  `;

  const generatePointerEvents = () => `    
    ${pseudoClass("pointer-events-none")} {
      pointer-events: none;
    }
    ${pseudoClass("pointer-events-auto")} {
      pointer-events: auto;
    }
  `;

  const generateResize = () => `    
    ${pseudoClass("resize-none")} {
      resize: none;
    }
    ${pseudoClass("resize-y")} {
      resize: vertical;
    }
    ${pseudoClass("resize-x")} {
      resize: horizontal;
    }
    ${pseudoClass("resize")} {
      resize: both;
    }
  `;

  const generateUserSelect = () => `    
    ${pseudoClass("select-none")} {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    ${pseudoClass("select-text")} {
      -webkit-user-select: text;
      -moz-user-select: text;
      -ms-user-select: text;
      user-select: text;
    }
    ${pseudoClass("select-all")} {
      -webkit-user-select: all;
      -moz-user-select: all;
      -ms-user-select: all;
      user-select: all;
    }
    ${pseudoClass("select-auto")} {
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
