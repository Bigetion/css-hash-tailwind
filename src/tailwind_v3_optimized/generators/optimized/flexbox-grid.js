import { createSimpleGenerator } from "../../utils/generatorFactory";

// Flexbox and Grid generators
export const generateFlexDirection = createSimpleGenerator({
  prefix: "flex",
  property: "flex-direction",
  themeKey: "flexDirection"
});

export const generateFlexWrap = createSimpleGenerator({
  prefix: "flex",
  property: "flex-wrap",
  themeKey: "flexWrap"
});

export const generateFlex = createSimpleGenerator({
  prefix: "flex",
  property: "flex",
  themeKey: "flex"
});

export const generateFlexGrow = createSimpleGenerator({
  prefix: "grow",
  property: "flex-grow",
  themeKey: "flexGrow"
});

export const generateFlexShrink = createSimpleGenerator({
  prefix: "shrink",
  property: "flex-shrink",
  themeKey: "flexShrink"
});

export const generateFlexBasis = createSimpleGenerator({
  prefix: "basis",
  property: "flex-basis",
  themeKey: "flexBasis"
});

export const generateOrder = createSimpleGenerator({
  prefix: "order",
  property: "order",
  themeKey: "order"
});

export const generateGridTemplateColumns = createSimpleGenerator({
  prefix: "grid-cols",
  property: "grid-template-columns",
  themeKey: "gridTemplateColumns"
});

export const generateGridTemplateRows = createSimpleGenerator({
  prefix: "grid-rows",
  property: "grid-template-rows",
  themeKey: "gridTemplateRows"
});

export const generateGridColumnStart = createSimpleGenerator({
  prefix: "col-start",
  property: "grid-column-start",
  themeKey: "gridColumnStart"
});

export const generateGridColumnEnd = createSimpleGenerator({
  prefix: "col-end",
  property: "grid-column-end",
  themeKey: "gridColumnEnd"
});

export const generateGridRowStart = createSimpleGenerator({
  prefix: "row-start",
  property: "grid-row-start",
  themeKey: "gridRowStart"
});

export const generateGridRowEnd = createSimpleGenerator({
  prefix: "row-end",
  property: "grid-row-end",
  themeKey: "gridRowEnd"
});

export const generateGridAutoFlow = createSimpleGenerator({
  prefix: "grid-flow",
  property: "grid-auto-flow",
  themeKey: "gridAutoFlow"
});

export const generateGridAutoColumns = createSimpleGenerator({
  prefix: "auto-cols",
  property: "grid-auto-columns",
  themeKey: "gridAutoColumns"
});

export const generateGridAutoRows = createSimpleGenerator({
  prefix: "auto-rows",
  property: "grid-auto-rows",
  themeKey: "gridAutoRows"
});

export const generateGridColumn = createSimpleGenerator({
  prefix: "col",
  property: "grid-column",
  themeKey: "gridColumn"
});

export const generateGridRow = createSimpleGenerator({
  prefix: "row",
  property: "grid-row",
  themeKey: "gridRow"
});

export const generateAlignContent = createSimpleGenerator({
  prefix: "content",
  property: "align-content",
  themeKey: "alignContent"
});

export const generateAlignItems = createSimpleGenerator({
  prefix: "items",
  property: "align-items",
  themeKey: "alignItems"
});

export const generateAlignSelf = createSimpleGenerator({
  prefix: "self",
  property: "align-self",
  themeKey: "alignSelf"
});

export const generateJustifyContent = createSimpleGenerator({
  prefix: "justify",
  property: "justify-content",
  themeKey: "justifyContent"
});

export const generateJustifyItems = createSimpleGenerator({
  prefix: "justify-items",
  property: "justify-items",
  themeKey: "justifyItems"
});

export const generateJustifySelf = createSimpleGenerator({
  prefix: "justify-self",
  property: "justify-self",
  themeKey: "justifySelf"
});

export const generatePlaceContent = createSimpleGenerator({
  prefix: "place-content",
  property: "place-content",
  themeKey: "placeContent"
});

export const generatePlaceItems = createSimpleGenerator({
  prefix: "place-items",
  property: "place-items",
  themeKey: "placeItems"
});

export const generatePlaceSelf = createSimpleGenerator({
  prefix: "place-self",
  property: "place-self",
  themeKey: "placeSelf"
});
