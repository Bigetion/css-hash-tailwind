import { createSimpleGenerator, createVariantGenerator } from "../../utils/generatorFactory";

// Border generators
export const generateBorderWidth = createSimpleGenerator({
  prefix: "border",
  property: "border-width",
  themeKey: "borderWidth"
});

export const generateBorderStyle = createSimpleGenerator({
  prefix: "border",
  property: "border-style",
  themeKey: "borderStyle"
});

export const generateBorderRadius = createSimpleGenerator({
  prefix: "rounded",
  property: "border-radius",
  themeKey: "borderRadius"
});

export const generateBorderCollapse = createSimpleGenerator({
  prefix: "border",
  property: "border-collapse",
  themeKey: "borderCollapse"
});

export const generateBorderSpacing = createVariantGenerator({
  prefix: "border-spacing",
  variants: {
    'default': 'border-spacing',
    'x': 'border-spacing-x',
    'y': 'border-spacing-y'
  },
  themeKey: "borderSpacing"
});

export const generateDivideWidth = createSimpleGenerator({
  prefix: "divide",
  property: "border-width",
  themeKey: "divideWidth",
  customHandler: ({ key, value, prefix, variants, pseudoClass }) => {
    // Special handling for divide width
    return `
      ${pseudoClass(`${prefix}-${key}`, variants)} > :not([hidden]) ~ :not([hidden]) {
        --tw-divide-y-reverse: 0;
        border-top-width: calc(${value} * calc(1 - var(--tw-divide-y-reverse)));
        border-bottom-width: calc(${value} * var(--tw-divide-y-reverse));
      }
    `;
  }
});

export const generateDivideStyle = createSimpleGenerator({
  prefix: "divide",
  property: "border-style",
  themeKey: "divideStyle",
  customHandler: ({ key, value, prefix, variants, pseudoClass }) => {
    return `
      ${pseudoClass(`${prefix}-${key}`, variants)} > :not([hidden]) ~ :not([hidden]) {
        border-style: ${value};
      }
    `;
  }
});

export const generateOutlineStyle = createSimpleGenerator({
  prefix: "outline",
  property: "outline-style",
  themeKey: "outlineStyle"
});

export const generateOutlineWidth = createSimpleGenerator({
  prefix: "outline",
  property: "outline-width",
  themeKey: "outlineWidth"
});

export const generateOutlineOffset = createSimpleGenerator({
  prefix: "outline-offset",
  property: "outline-offset",
  themeKey: "outlineOffset"
});

export const generateRingWidth = createSimpleGenerator({
  prefix: "ring",
  property: "--ring-width",
  themeKey: "ringWidth",
  customHandler: ({ key, value, prefix, variants, pseudoClass }) => {
    if (key === "0") {
      return `
        ${pseudoClass(`${prefix}-${key}`, variants)} {
          --ring-width: 0px;
          --ring-offset-shadow: var(--ring-inset) 0 0 0 var(--ring-offset-width) var(--ring-offset-color);
          --ring-shadow: var(--ring-inset) 0 0 0 calc(var(--ring-width) + var(--ring-offset-width)) var(--ring-color);
          box-shadow: var(--ring-offset-shadow), var(--ring-shadow), var(--shadow, 0 0 #0000);
        }
      `;
    }
    
    return `
      ${pseudoClass(`${prefix}-${key}`, variants)} {
        --ring-width: ${value};
        --ring-offset-shadow: var(--ring-inset) 0 0 0 var(--ring-offset-width) var(--ring-offset-color);
        --ring-shadow: var(--ring-inset) 0 0 0 calc(var(--ring-width) + var(--ring-offset-width)) var(--ring-color);
        box-shadow: var(--ring-offset-shadow), var(--ring-shadow), var(--shadow, 0 0 #0000);
      }
    `;
  }
});

export const generateRingOffsetWidth = createSimpleGenerator({
  prefix: "ring-offset",
  property: "--ring-offset-width",
  themeKey: "ringOffsetWidth"
});
