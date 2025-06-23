import { getConfigOptions } from "./utils/index";

// Import all generators from the single folder
import * as generators from "./generators/index.single";

// Define the plugins object with all generators
const plugins = {
  accentColor: generators.generateAccentColor,
  base: generators.generateBase,
  accessibility: generators.generateAccessibility,
  alignContent: generators.generateAlignContent,
  alignItems: generators.generateAlignItems,
  alignSelf: generators.generateAlignSelf,
  appearance: generators.generateAppearance,
  aspect: generators.generateAspect,
  backgroundAttachment: generators.generateBackgroundAttachment,
  backgroundClip: generators.generateBackgroundClip,
  backgroundColor: generators.generateBackgroundColor,
  backgroundImage: generators.generateBackgroundImage,
  backgroundOpacity: generators.generateBackgroundOpacity,
  backgroundOrigin: generators.generateBackgroundOrigin,
  backgroundPosition: generators.generateBackgroundPosition,
  backgroundRepeat: generators.generateBackgroundRepeat,
  backgroundSize: generators.generateBackgroundSize,
  blur: generators.generateBlur,
  borderCollapse: generators.generateBorderCollapse,
  borderColor: generators.generateBorderColor,
  borderOpacity: generators.generateBorderOpacity,
  borderRadius: generators.generateBorderRadius,
  borderSpacing: generators.generateBorderSpacing,
  borderStyle: generators.generateBorderStyle,
  borderWidth: generators.generateBorderWidth,
  boxDecorationBreak: generators.generateBoxDecorationBreak,
  boxShadow: generators.generateBoxShadow,
  boxSizing: generators.generateBoxSizing,
  brightness: generators.generateBrightness,
  captionSide: generators.generateCaptionSide,
  caretColor: generators.generateCaretColor,
  clear: generators.generateClear,
  container: generators.generateContainer,
  contrast: generators.generateContrast,
  cursor: generators.generateCursor,
  display: generators.generateDisplay,
  divideColor: generators.generateDivideColor,
  divideOpacity: generators.generateDivideOpacity,
  divideStyle: generators.generateDivideStyle,
  divideWidth: generators.generateDivideWidth,
  dropShadow: generators.generateDropShadow,
  fill: generators.generateFill,
  filter: generators.generateFilter,
  flex: generators.generateFlex,
  flexBasis: generators.generateFlexBasis,
  flexDirection: generators.generateFlexDirection,
  flexGrow: generators.generateFlexGrow,
  flexShrink: generators.generateFlexShrink,
  flexWrap: generators.generateFlexWrap,
  float: generators.generateFloats,
  fontSize: generators.generateFontSize,
  fontSmoothing: generators.generateFontSmoothing,
  fontStyle: generators.generateFontStyle,
  fontVariantNumeric: generators.generateFontVariantNumeric,
  fontWeight: generators.generateFontWeight,
  gap: generators.generateGap,
  gradientColorStops: generators.generateGradientColorStops,
  grayscale: generators.generateGrayscale,
  gridAutoColumns: generators.generateGridAutoColumns,
  gridAutoFlow: generators.generateGridAutoFlow,
  gridAutoRows: generators.generateGridAutoRows,
  gridColumn: generators.generateGridColumn,
  gridColumnEnd: generators.generateGridColumnEnd,
  gridColumnStart: generators.generateGridColumnStart,
  gridRow: generators.generateGridRow,
  gridRowEnd: generators.generateGridRowEnd,
  gridRowStart: generators.generateGridRowStart,
  gridTemplateColumns: generators.generateGridTemplateColumns,
  gridTemplateRows: generators.generateGridTemplateRows,
  height: generators.generateHeight,
  hueRotate: generators.generateHueRotate,
  hyphens: generators.generateHyphens,
  inset: generators.generateInset,
  invert: generators.generateInvert,
  isolation: generators.generateIsolation,
  justifyContent: generators.generateJustifyContent,
  justifyItems: generators.generateJustifyItems,
  justifySelf: generators.generateJustifySelf,
  letterSpacing: generators.generateLetterSpacing,
  lineClamp: generators.generateLineClamp,
  lineHeight: generators.generateLineHeight,
  listStylePosition: generators.generateListStylePosition,
  listStyleType: generators.generateListStyleType,
  margin: generators.generateMargin,
  maxHeight: generators.generateMaxHeight,
  maxWidth: generators.generateMaxWidth,
  minHeight: generators.generateMinHeight,
  minWidth: generators.generateMinWidth,
  mixBlendMode: generators.generateMixBlendMode,
  objectFit: generators.generateObjectFit,
  objectPosition: generators.generateObjectPosition,
  opacity: generators.generateOpacity,
  order: generators.generateOrder,
  outlineColor: generators.generateOutlineColor,
  outlineOffset: generators.generateOutlineOffset,
  outlineOpacity: generators.generateOutlineOpacity,
  outlineStyle: generators.generateOutlineStyle,
  outlineWidth: generators.generateOutlineWidth,
  overflow: generators.generateOverflow,
  overscrollBehavior: generators.generateOverscrollBehavior,
  padding: generators.generatePadding,
  placeContent: generators.generatePlaceContent,
  placeItems: generators.generatePlaceItems,
  placeSelf: generators.generatePlaceSelf,
  placeholderColor: generators.generatePlaceholderColor,
  placeholderOpacity: generators.generatePlaceholderOpacity,
  pointerEvents: generators.generatePointerEvents,
  position: generators.generatePosition,
  resize: generators.generateResize,
  ringColor: generators.generateRingColor,
  ringOffsetColor: generators.generateRingOffsetColor,
  ringOffsetWidth: generators.generateRingOffsetWidth,
  ringOpacity: generators.generateRingOpacity,
  ringWidth: generators.generateRingWidth,
  rotate: generators.generateRotate,
  saturate: generators.generateSaturate,
  scale: generators.generateScale,
  scrollBehavior: generators.generateScrollBehavior,
  scrollMargin: generators.generateScrollMargin,
  scrollPadding: generators.generateScrollPadding,
  scrollSnapAlign: generators.generateScrollSnapAlign,
  scrollSnapStop: generators.generateScrollSnapStop,
  scrollSnapType: generators.generateScrollSnapType,
  sepia: generators.generateSepia,
  size: generators.generateSize,
  skew: generators.generateSkew,
  space: generators.generateSpace,
  stroke: generators.generateStroke,
  strokeWidth: generators.generateStrokeWidth,
  tableLayout: generators.generateTableLayout,
  textAlign: generators.generateTextAlign,
  textColor: generators.generateTextColor,
  textDecoration: generators.generateTextDecoration,
  textDecorationColor: generators.generateTextDecorationColor,
  textDecorationStyle: generators.generateTextDecorationStyle,
  textDecorationThickness: generators.generateTextDecorationThickness,
  textIndent: generators.generateTextIndent,
  textOpacity: generators.generateTextOpacity,
  textOverflow: generators.generateTextOverflow,
  textShadowBlur: generators.generateTextShadowBlur,
  textShadowColor: generators.generateTextShadowColor,
  textShadowOpacity: generators.generateTextShadowOpacity,
  textShadowX: generators.generateTextShadowX,
  textShadowY: generators.generateTextShadowY,
  textTransform: generators.generateTextTransform,
  textUnderlineOffset: generators.generateTextUnderlineOffset,
  textWrap: generators.generateTextWrap,
  touchAction: generators.generateTouchAction,
  transform: generators.generateTransform,
  transformOrigin: generators.generateTransformOrigin,
  translate: generators.generateTranslate,
  userSelect: generators.generateUserSelect,
  verticalAlign: generators.generateVerticalAlign,
  visibility: generators.generateVisibility,
  whitespace: generators.generateWhitespace,
  width: generators.generateWidth,
  willChange: generators.generateWillChange,
  wordBreak: generators.generateWordBreak,
  zIndex: generators.generateZIndex,
};

function generateTailwindCssString(options = {}) {
  const pluginKeys = Object.keys(plugins);
  const configOptions = getConfigOptions(options, pluginKeys);
  const { corePlugins = {} } = configOptions;
  const corePluginKeys = Object.keys(corePlugins);

  let cssString = `
    *, ::after, ::before {
      --border-opacity: 1;
      border-color:rgba(229, 231, 235, var(--border-opacity));
    }
    *, ::before, ::after {
      --ring-inset: var(--empty,/*!*/ /*!*/);
      --ring-offset-width: 0px;
      --ring-offset-color: #fff;
      --ring-color: rgba(59, 130, 246, 0.5);
      --ring-offset-shadow: 0 0 #0000;
      --ring-shadow: 0 0 #0000;
    }
  `;
  Object.keys(plugins).forEach((key) => {
    if (corePluginKeys.indexOf(key) >= 0 && !corePlugins[key]) {
      cssString += "";
    } else {
      cssString += plugins[key](configOptions);
    }
  });
  return cssString;
}

function addStyleSheet(attributeId, attributeValue, cssString) {
  const isElementExist = document.querySelector(
    `style[${attributeId}=${attributeValue}]`
  );
  if (!isElementExist) {
    const head = document.head || document.getElementsByTagName("head")[0];
    const style = document.createElement("style");
    head.appendChild(style);
    style.setAttribute("type", "text/css");
    style.setAttribute(attributeId, attributeValue);
    if (style.styleSheet) {
      style.styleSheet.cssText = cssString;
    } else {
      style.appendChild(document.createTextNode(cssString));
    }
  }
}

export default function generateInlineStyle(options = {}) {
  if (typeof window === "object") {
    const { id = "tailwind-css" } = options;
    const cssString = generateTailwindCssString(options).replace(/\s\s+/g, " ");
    addStyleSheet("data-inline-style", id, cssString);
  }
}
