import { getConfigOptions } from "./utils/index";

import generateAccessibility from "./generators/accessibility";
import generateAlignContent from "./generators/alignContent";
import generateAlignItems from "./generators/alignItems";
import generateAlignSelf from "./generators/alignSelf";
import generateAppearance from "./generators/appearance";
import generateAspect from "./generators/aspect";
import generateBackgroundAttachment from "./generators/backgroundAttachment";
import generateBackgroundClip from "./generators/backgroundClip";
import generateBackgroundColor from "./generators/backgroundColor";
import generateBackgroundImage from "./generators/backgroundImage";
import generateBackgroundOpacity from "./generators/backgroundOpacity";
import generateBackgroundOrigin from "./generators/backgroundOrigin";
import generateBackgroundPosition from "./generators/backgroundPosition";
import generateBackgroundRepeat from "./generators/backgroundRepeat";
import generateBackgroundSize from "./generators/backgroundSize";
import generateBase from "./generators/base";
import generateBorderCollapse from "./generators/borderCollapse";
import generateBorderColor from "./generators/borderColor";
import generateBorderOpacity from "./generators/borderOpacity";
import generateBorderRadius from "./generators/borderRadius";
import generateBorderStyle from "./generators/borderStyle";
import generateBorderWidth from "./generators/borderWidth";
import generateBoxDecorationBreak from "./generators/boxDecorationBreak";
import generateBoxShadow from "./generators/boxShadow";
import generateBoxSizing from "./generators/boxSizing";
import generateClear from "./generators/clear";
import generateContainer from "./generators/container";
import generateCursor from "./generators/cursor";
import generateDisplay from "./generators/display";
import generateDivideColor from "./generators/divideColor";
import generateDivideOpacity from "./generators/divideOpacity";
import generateDivideStyle from "./generators/divideStyle";
import generateDivideWidth from "./generators/divideWidth";
import generateFill from "./generators/fill";
import generateFlex from "./generators/flex";
import generateFlexBasis from "./generators/flexBasis";
import generateFlexDirection from "./generators/flexDirection";
import generateFlexGrow from "./generators/flexGrow";
import generateFlexShrink from "./generators/flexShrink";
import generateFlexWrap from "./generators/flexWrap";
import generateFloat from "./generators/float";
import generateFontSize from "./generators/fontSize";
import generateFontSmoothing from "./generators/fontSmoothing";
import generateFontStyle from "./generators/fontStyle";
import generateFontVariantNumeric from "./generators/fontVariantNumeric";
import generateFontWeight from "./generators/fontWeight";
import generateForm from "./generators/form";
import generateGap from "./generators/gap";
import generateGradientColorStops from "./generators/gradientColorStops";
import generateGridAutoColumns from "./generators/gridAutoColumns";
import generateGridAutoFlow from "./generators/gridAutoFlow";
import generateGridAutoRows from "./generators/gridAutoRows";
import generateGridColumn from "./generators/gridColumn";
import generateGridColumnEnd from "./generators/gridColumnEnd";
import generateGridColumnStart from "./generators/gridColumnStart";
import generateGridRow from "./generators/gridRow";
import generateGridRowEnd from "./generators/gridRowEnd";
import generateGridRowStart from "./generators/gridRowStart";
import generateGridTemplateColumns from "./generators/gridTemplateColumns";
import generateGridTemplateRows from "./generators/gridTemplateRows";
import generateHeight from "./generators/height";
import generateHyphens from "./generators/hyphens";
import generateInset from "./generators/inset";
import generateIsolation from "./generators/isolation";
import generateJustifyContent from "./generators/justifyContent";
import generateJustifyItems from "./generators/justifyItems";
import generateJustifySelf from "./generators/justifySelf";
import generateLetterSpacing from "./generators/letterSpacing";
import generateLineClamp from "./generators/lineClamp";
import generateLineHeight from "./generators/lineHeight";
import generateListStylePosition from "./generators/listStylePosition";
import generateListStyleType from "./generators/listStyleType";
import generateMargin from "./generators/margin";
import generateMaxHeight from "./generators/maxHeight";
import generateMaxWidth from "./generators/maxWidth";
import generateMinHeight from "./generators/minHeight";
import generateMinWidth from "./generators/minWidth";
import generateMixBlendMode from "./generators/mixBlendMode";
import generateObjectFit from "./generators/objectFit";
import generateObjectPosition from "./generators/objectPosition";
import generateOpacity from "./generators/opacity";
import generateOrder from "./generators/order";
import generateOutlineColor from "./generators/outlineColor";
import generateOutlineOffset from "./generators/outlineOffset";
import generateOutlineOpacity from "./generators/outlineOpacity";
import generateOutlineStyle from "./generators/outlineStyle";
import generateOutlineWidth from "./generators/outlineWidth";
import generateOverflow from "./generators/overflow";
import generateOverscrollBehavior from "./generators/overscrollBehavior";
import generatePadding from "./generators/padding";
import generatePlaceContent from "./generators/placeContent";
import generatePlaceItems from "./generators/placeItems";
import generatePlaceSelf from "./generators/placeSelf";
import generatePlaceholderColor from "./generators/placeholderColor";
import generatePlaceholderOpacity from "./generators/placeholderOpacity";
import generatePointerEvents from "./generators/pointerEvents";
import generatePosition from "./generators/position";
import generateResize from "./generators/resize";
import generateRingColor from "./generators/ringColor";
import generateRingOffsetColor from "./generators/ringOffsetColor";
import generateRingOffsetWidth from "./generators/ringOffsetWidth";
import generateRingOpacity from "./generators/ringOpacity";
import generateRingWidth from "./generators/ringWidth";
import generateRotate from "./generators/rotate";
import generateScale from "./generators/scale";
import generateSize from "./generators/size";
import generateSkew from "./generators/skew";
import generateSpace from "./generators/space";
import generateStroke from "./generators/stroke";
import generateStrokeWidth from "./generators/strokeWidth";
import generateTableLayout from "./generators/tableLayout";
import generateTextAlign from "./generators/textAlign";
import generateTextColor from "./generators/textColor";
import generateTextDecoration from "./generators/textDecoration";
import generateTextDecorationColor from "./generators/textDecorationColor";
import generateTextDecorationStyle from "./generators/textDecorationStyle";
import generateTextDecorationThickness from "./generators/textDecorationThickness";
import generateTextIndent from "./generators/textIndent";
import generateTextOpacity from "./generators/textOpacity";
import generateTextOverflow from "./generators/textOverflow";
import generateTextTransform from "./generators/textTransform";
import generateTextUnderlineOffset from "./generators/textUnderlineOffset";
import generateTextWrap from "./generators/textWrap";
import generateTransform from "./generators/transform";
import generateTransformOrigin from "./generators/transformOrigin";
import generateTranslate from "./generators/translate";
import generateUserSelect from "./generators/userSelect";
import generateVerticalAlign from "./generators/verticalAlign";
import generateVisibility from "./generators/visibility";
import generateWhitespace from "./generators/whitespace";
import generateWidth from "./generators/width";
import generateWordBreak from "./generators/wordBreak";
import generateZIndex from "./generators/zIndex";

const generateOptions = {
  base: generateBase,
  form: generateForm,
  accessibility: generateAccessibility,
  alignContent: generateAlignContent,
  alignItems: generateAlignItems,
  alignSelf: generateAlignSelf,
  appearance: generateAppearance,
  aspect: generateAspect,
  backgroundAttachment: generateBackgroundAttachment,
  backgroundClip: generateBackgroundClip,
  backgroundColor: generateBackgroundColor,
  backgroundImage: generateBackgroundImage,
  backgroundOpacity: generateBackgroundOpacity,
  backgroundOrigin: generateBackgroundOrigin,
  backgroundPosition: generateBackgroundPosition,
  backgroundRepeat: generateBackgroundRepeat,
  backgroundSize: generateBackgroundSize,
  borderCollapse: generateBorderCollapse,
  borderColor: generateBorderColor,
  borderOpacity: generateBorderOpacity,
  borderRadius: generateBorderRadius,
  borderStyle: generateBorderStyle,
  borderWidth: generateBorderWidth,
  boxDecorationBreak: generateBoxDecorationBreak,
  boxShadow: generateBoxShadow,
  boxSizing: generateBoxSizing,
  clear: generateClear,
  container: generateContainer,
  cursor: generateCursor,
  display: generateDisplay,
  divideColor: generateDivideColor,
  divideOpacity: generateDivideOpacity,
  divideStyle: generateDivideStyle,
  divideWidth: generateDivideWidth,
  fill: generateFill,
  flex: generateFlex,
  flexBasis: generateFlexBasis,
  flexDirection: generateFlexDirection,
  flexGrow: generateFlexGrow,
  flexShrink: generateFlexShrink,
  flexWrap: generateFlexWrap,
  float: generateFloat,
  fontSize: generateFontSize,
  fontSmoothing: generateFontSmoothing,
  fontStyle: generateFontStyle,
  fontVariantNumeric: generateFontVariantNumeric,
  fontWeight: generateFontWeight,
  gap: generateGap,
  gradientColorStops: generateGradientColorStops,
  gridAutoColumns: generateGridAutoColumns,
  gridAutoFlow: generateGridAutoFlow,
  gridAutoRows: generateGridAutoRows,
  gridColumn: generateGridColumn,
  gridColumnEnd: generateGridColumnEnd,
  gridColumnStart: generateGridColumnStart,
  gridRow: generateGridRow,
  gridRowEnd: generateGridRowEnd,
  gridRowStart: generateGridRowStart,
  gridTemplateColumns: generateGridTemplateColumns,
  gridTemplateRows: generateGridTemplateRows,
  height: generateHeight,
  hyphens: generateHyphens,
  inset: generateInset,
  isolation: generateIsolation,
  justifyContent: generateJustifyContent,
  justifyItems: generateJustifyItems,
  justifySelf: generateJustifySelf,
  letterSpacing: generateLetterSpacing,
  lineClamp: generateLineClamp,
  lineHeight: generateLineHeight,
  listStylePosition: generateListStylePosition,
  listStyleType: generateListStyleType,
  margin: generateMargin,
  maxHeight: generateMaxHeight,
  maxWidth: generateMaxWidth,
  minHeight: generateMinHeight,
  minWidth: generateMinWidth,
  objectFit: generateObjectFit,
  mixBlendMode: generateMixBlendMode,
  objectPosition: generateObjectPosition,
  opacity: generateOpacity,
  order: generateOrder,
  outlineColor: generateOutlineColor,
  outlineOffset: generateOutlineOffset,
  outlineOpacity: generateOutlineOpacity,
  outlineStyle: generateOutlineStyle,
  outlineWidth: generateOutlineWidth,
  overflow: generateOverflow,
  overscrollBehavior: generateOverscrollBehavior,
  padding: generatePadding,
  placeContent: generatePlaceContent,
  placeItems: generatePlaceItems,
  placeSelf: generatePlaceSelf,
  placeholderColor: generatePlaceholderColor,
  placeholderOpacity: generatePlaceholderOpacity,
  pointerEvents: generatePointerEvents,
  position: generatePosition,
  resize: generateResize,
  ringColor: generateRingColor,
  ringOffsetColor: generateRingOffsetColor,
  ringOffsetWidth: generateRingOffsetWidth,
  ringOpacity: generateRingOpacity,
  ringWidth: generateRingWidth,
  rotate: generateRotate,
  scale: generateScale,
  size: generateSize,
  skew: generateSkew,
  space: generateSpace,
  stroke: generateStroke,
  strokeWidth: generateStrokeWidth,
  tableLayout: generateTableLayout,
  textAlign: generateTextAlign,
  textColor: generateTextColor,
  textDecoration: generateTextDecoration,
  textDecorationColor: generateTextDecorationColor,
  textDecorationStyle: generateTextDecorationStyle,
  textDecorationThickness: generateTextDecorationThickness,
  textIndent: generateTextIndent,
  textOpacity: generateTextOpacity,
  textOverflow: generateTextOverflow,
  textTransform: generateTextTransform,
  textUnderlineOffset: generateTextUnderlineOffset,
  textWrap: generateTextWrap,
  transform: generateTransform,
  transformOrigin: generateTransformOrigin,
  translate: generateTranslate,
  userSelect: generateUserSelect,
  verticalAlign: generateVerticalAlign,
  visibility: generateVisibility,
  whitespace: generateWhitespace,
  width: generateWidth,
  wordBreak: generateWordBreak,
  zIndex: generateZIndex,
};

function generateTailwindCssString(options = {}) {
  const configOptions = getConfigOptions(options);
  const { corePlugins = {} } = configOptions;

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
  Object.keys(generateOptions).forEach((key) => {
    if (corePlugins[key]) {
      cssString += generateOptions[key](configOptions);
    }
  });
  return cssString;
}

export default function generateTailwindCss(options = {}) {
  if (typeof window === "object") {
    const { id = "tailwind-css" } = options;
    const cssString = generateTailwindCssString(options).replace(/\s\s+/g, " ");
    const head = document.head || document.getElementsByTagName("head")[0];
    const style = document.createElement("style");
    head.appendChild(style);
    style.setAttribute("type", "text/css");
    style.setAttribute("data-inline-style", id);
    if (style.styleSheet) {
      style.styleSheet.cssText = cssString;
    } else {
      style.appendChild(document.createTextNode(cssString));
    }
  }
}
