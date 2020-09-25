import { cssHash } from "css-hash";

import { screens } from "../constants";

const prefix = "container";

const generateContainer = (width) => {
  let containerString = `
    .${prefix} {
      width: 100%;
    }
  `;
  if (width) {
    containerString = `
      @media (min-width: ${width}) {
        .${prefix} {
          max-width: ${width};
        }
      }
    `;
  }
  return containerString;
};

const generateContainerScreen = (orientation) => {
  let containerString = "";
  Object.values(screens).forEach((width) => {
    containerString += `
      @media (min-width: ${width}) {
        .${orientation}\\:${prefix} {
          max-width: ${width};
        }
      }
    `;
  });
  return `
    @media (min-width: 640px) {
      .sm\\:container {
        width: 100%;
      }
      ${containerString}
    }
  `;
};

let cssString = generateContainer();

Object.entries(screens).forEach(([screen, screenValue]) => {
  cssString += generateContainer(screenValue);
  cssString += generateContainerScreen(screen);
});

cssHash(() => cssString);
