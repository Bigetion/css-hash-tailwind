import { createSimpleGenerator } from "../../utils/generatorFactory";

// Typography generators
export const generateFontWeight = createSimpleGenerator({
  prefix: "font",
  property: "font-weight",
  themeKey: "fontWeight"
});

export const generateFontSize = createSimpleGenerator({
  prefix: "text",
  property: "font-size",
  themeKey: "fontSize"
});

export const generateFontStyle = createSimpleGenerator({
  prefix: "italic",
  property: "font-style",
  themeKey: "fontStyle",
  valueFormatter: () => "italic"
});

export const generateFontSmoothing = createSimpleGenerator({
  prefix: "antialiased",
  property: "-webkit-font-smoothing",
  themeKey: "fontSmoothing",
  valueFormatter: () => "antialiased"
});

export const generateLetterSpacing = createSimpleGenerator({
  prefix: "tracking",
  property: "letter-spacing",
  themeKey: "letterSpacing"
});

export const generateLineHeight = createSimpleGenerator({
  prefix: "leading",
  property: "line-height",
  themeKey: "lineHeight"
});

export const generateTextAlign = createSimpleGenerator({
  prefix: "text",
  property: "text-align",
  themeKey: "textAlign"
});

export const generateTextTransform = createSimpleGenerator({
  prefix: "text",
  property: "text-transform",
  themeKey: "textTransform"
});

export const generateTextOverflow = createSimpleGenerator({
  prefix: "text",
  property: "text-overflow",
  themeKey: "textOverflow"
});

export const generateWordBreak = createSimpleGenerator({
  prefix: "break",
  property: "word-break",
  themeKey: "wordBreak"
});

export const generateWhitespace = createSimpleGenerator({
  prefix: "whitespace",
  property: "white-space",
  themeKey: "whitespace"
});

export const generateTextWrap = createSimpleGenerator({
  prefix: "text",
  property: "text-wrap",
  themeKey: "textWrap"
});

export const generateHyphens = createSimpleGenerator({
  prefix: "hyphens",
  property: "hyphens",
  themeKey: "hyphens"
});
