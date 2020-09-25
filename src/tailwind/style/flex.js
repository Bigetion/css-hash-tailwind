import { cssHash } from "css-hash";

import { generateCss } from "../utils";

const prefix = "flex";

const flexDirection = {
  row: "row",
  "row-reverse": "row-reverse",
  col: "column",
  "col-reverse": "column-reverse",
};

const flexWrap = {
  wrap: "wrap",
  "wrap-reverse": "wrap-reverse",
  "no-wrap": "nowrap",
};

const flexSize = {
  1: "1 1 0",
  auto: "1 1 auto",
  initial: "0 1 auto",
  none: "none",
};

const flexGrow = {
  0: 0,
  "": 1,
};

const flexShrink = {
  0: 0,
  "": 1,
};

const order = Object.assign(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reduce(
    (currentObj, size) => Object.assign(currentObj, { [size]: size }),
    {}
  ),
  {
    first: "-9999",
    last: "9999",
    none: "0",
  }
);

const responsiveCssString = generateCss(({ orientationPrefix }) => {
  const generateFlexDirection = () => {
    let str = "";
    Object.entries(flexDirection).forEach(([key, value]) => {
      str += `
        .${orientationPrefix}${prefix}-${key} {
          flex-direction: ${value};
        }
      `;
    });
    return str;
  };

  const generateFlexWrap = () => {
    let str = "";
    Object.entries(flexWrap).forEach(([key, value]) => {
      str += `
        .${orientationPrefix}${prefix}-${key} {
          flex-wrap: ${value};
        }
      `;
    });
    return str;
  };

  const generateFlexSize = () => {
    let str = "";
    Object.entries(flexSize).forEach(([key, value]) => {
      str += `
        .${orientationPrefix}${prefix}-${key} {
          flex: ${value};
        }
      `;
    });
    return str;
  };

  const generateFlexGrow = () => {
    let str = "";
    Object.entries(flexGrow).forEach(([key, value]) => {
      str += `
        .${orientationPrefix}${prefix}-${key} {
          flex-grow: ${value};
        }
      `;
    });
    return str;
  };

  const generateFlexShrink = () => {
    let str = "";
    Object.entries(flexShrink).forEach(([key, value]) => {
      str += `
        .${orientationPrefix}${prefix}-${key} {
          flex-shrink: ${value};
        }
      `;
    });
    return str;
  };

  const generateOrder = () => {
    let str = "";
    Object.entries(order).forEach(([key, value]) => {
      str += `
        .${orientationPrefix}order-${key} {
          order: ${value};
        }
      `;
    });
    return str;
  };

  let cssString = generateFlexDirection();
  cssString += generateFlexWrap();
  cssString += generateFlexSize();
  cssString += generateFlexGrow();
  cssString += generateFlexShrink();
  cssString += generateOrder();
  return cssString;
});

cssHash(() => responsiveCssString);
