import { getConfigOptions } from "./utils/index";

import generateAccentColor from "./generators/accentColor";
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
import generateBlur from "./generators/blur";
import generateBorderCollapse from "./generators/borderCollapse";
import generateBorderColor from "./generators/borderColor";
import generateBorderOpacity from "./generators/borderOpacity";
import generateBorderRadius from "./generators/borderRadius";
import generateBorderSpacing from "./generators/borderSpacing";
import generateBorderStyle from "./generators/borderStyle";
import generateBorderWidth from "./generators/borderWidth";
import generateBoxDecorationBreak from "./generators/boxDecorationBreak";
import generateBoxShadow from "./generators/boxShadow";
import generateBoxSizing from "./generators/boxSizing";
import generateBrightness from "./generators/brightness";
import generateCaptionSide from "./generators/captionSide";
import generateCaretColor from "./generators/caretColor";
import generateClear from "./generators/clear";
import generateContainer from "./generators/container";
import generateContrast from "./generators/contrast";
import generateCursor from "./generators/cursor";
import generateDisplay from "./generators/display";
import generateDropShadow from "./generators/dropShadow";
import generateFill from "./generators/fill";
import generateFilter from "./generators/filter";
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
import generateGap from "./generators/gap";
import generateGradientColorStops from "./generators/gradientColorStops";
import generateGrayscale from "./generators/grayscale";
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
import generateHueRotate from "./generators/hueRotate";
import generateHyphens from "./generators/hyphens";
import generateInset from "./generators/inset";
import generateInvert from "./generators/invert";
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
import generatePointerEvents from "./generators/pointerEvents";
import generatePosition from "./generators/position";
import generateResize from "./generators/resize";
import generateRingColor from "./generators/ringColor";
import generateRingOffsetColor from "./generators/ringOffsetColor";
import generateRingOffsetWidth from "./generators/ringOffsetWidth";
import generateRingOpacity from "./generators/ringOpacity";
import generateRingWidth from "./generators/ringWidth";
import generateSaturate from "./generators/saturate";
import generateRotate from "./generators/rotate";
import generateScale from "./generators/scale";
import generateScrollBehavior from "./generators/scrollBehavior";
import generateScrollMargin from "./generators/scrollMargin";
import generateScrollPadding from "./generators/scrollPadding";
import generateScrollSnapAlign from "./generators/scrollSnapAlign";
import generateScrollSnapStop from "./generators/scrollSnapStop";
import generateScrollSnapType from "./generators/scrollSnapType";
import generateSepia from "./generators/sepia";
import generateSize from "./generators/size";
import generateSkew from "./generators/skew";
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
import generateTextShadowBlur from "./generators/textShadowBlur";
import generateTextShadowColor from "./generators/textShadowColor";
import generateTextShadowOpacity from "./generators/textShadowOpacity";
import generateTextShadowX from "./generators/textShadowX";
import generateTextShadowY from "./generators/textShadowY";
import generateTextTransform from "./generators/textTransform";
import generateTextUnderlineOffset from "./generators/textUnderlineOffset";
import generateTextWrap from "./generators/textWrap";
import generateTouchAction from "./generators/touchAction";
import generateTransform from "./generators/transform";
import generateTransformOrigin from "./generators/transformOrigin";
import generateTranslate from "./generators/translate";
import generateUserSelect from "./generators/userSelect";
import generateVerticalAlign from "./generators/verticalAlign";
import generateVisibility from "./generators/visibility";
import generateWhitespace from "./generators/whitespace";
import generateWidth from "./generators/width";
import generateWordBreak from "./generators/wordBreak";
import generateWillChange from "./generators/willChange";
import generateZIndex from "./generators/zIndex";

const plugins = {
  accentColor: generateAccentColor,
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
  blur: generateBlur,
  borderCollapse: generateBorderCollapse,
  borderColor: generateBorderColor,
  borderOpacity: generateBorderOpacity,
  borderRadius: generateBorderRadius,
  borderSpacing: generateBorderSpacing,
  borderStyle: generateBorderStyle,
  borderWidth: generateBorderWidth,
  boxDecorationBreak: generateBoxDecorationBreak,
  boxShadow: generateBoxShadow,
  boxSizing: generateBoxSizing,
  brightness: generateBrightness,
  captionSide: generateCaptionSide,
  caretColor: generateCaretColor,
  clear: generateClear,
  container: generateContainer,
  contrast: generateContrast,
  cursor: generateCursor,
  display: generateDisplay,
  dropShadow: generateDropShadow,
  fill: generateFill,
  filter: generateFilter,
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
  grayscale: generateGrayscale,
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
  hueRotate: generateHueRotate,
  hyphens: generateHyphens,
  inset: generateInset,
  invert: generateInvert,
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
  pointerEvents: generatePointerEvents,
  position: generatePosition,
  resize: generateResize,
  ringColor: generateRingColor,
  ringOffsetColor: generateRingOffsetColor,
  ringOffsetWidth: generateRingOffsetWidth,
  ringOpacity: generateRingOpacity,
  ringWidth: generateRingWidth,
  rotate: generateRotate,
  saturate: generateSaturate,
  scale: generateScale,
  scrollBehavior: generateScrollBehavior,
  scrollMargin: generateScrollMargin,
  scrollPadding: generateScrollPadding,
  scrollSnapAlign: generateScrollSnapAlign,
  scrollSnapStop: generateScrollSnapStop,
  scrollSnapType: generateScrollSnapType,
  sepia: generateSepia,
  size: generateSize,
  skew: generateSkew,
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
  textShadowBlur: generateTextShadowBlur,
  textShadowColor: generateTextShadowColor,
  textShadowOpacity: generateTextShadowOpacity,
  textShadowX: generateTextShadowX,
  textShadowY: generateTextShadowY,
  textTransform: generateTextTransform,
  textUnderlineOffset: generateTextUnderlineOffset,
  textWrap: generateTextWrap,
  touchAction: generateTouchAction,
  transform: generateTransform,
  transformOrigin: generateTransformOrigin,
  translate: generateTranslate,
  userSelect: generateUserSelect,
  verticalAlign: generateVerticalAlign,
  visibility: generateVisibility,
  whitespace: generateWhitespace,
  width: generateWidth,
  willChange: generateWillChange,
  wordBreak: generateWordBreak,
  zIndex: generateZIndex,
};

function generateTailwindCssString(options = {}) {
  const pluginKeys = Object.keys(plugins);
  const configOptions = getConfigOptions(options, pluginKeys);
  const { corePlugins = {} } = configOptions;
  const corePluginKeys = Object.keys(corePlugins);

  let cssString = ``;
  Object.keys(plugins).forEach((key) => {
    if (corePluginKeys.indexOf(key) >= 0 && !corePlugins[key]) {
      cssString += "";
    } else {
      cssString += plugins[key](configOptions);
    }
  });
  return cssString;
}

function convertCssToObject(cssString) {
  const cssObject = {};
  const regex = /([a-zA-Z0-9\-\\.]+)\s*{\s*([^}]+)\s*}/g;
  let match;

  while ((match = regex.exec(cssString)) !== null) {
    const className = match[1].replace(/\\/g, "");
    const cssRules = match[2].trim().replace(/\s+/g, " ");
    cssObject[className] = cssRules;
  }

  return cssObject;
}

function inlineStyleToJson(styleString) {
  const styles = styleString.split(";").filter((style) => style.trim() !== "");
  const styleObject = {};

  styles.forEach((style) => {
    const [key, value] = style.split(":").map((s) => s.trim());
    if (key && value) {
      const camelCaseKey = key.replace(/-([a-z])/g, (_, letter) =>
        letter.toUpperCase()
      );
      styleObject[camelCaseKey] = value;
    }
  });

  return styleObject;
}

function jsonToStyle(json) {
  return Object.entries(json)
    .map(([key, value]) => {
      const kebabCaseKey = key.replace(
        /[A-Z]/g,
        (letter) => `-${letter.toLowerCase()}`
      );
      return `${kebabCaseKey}: ${value};`;
    })
    .join(" ");
}

function replaceAndRemoveCSSVariables(styleString) {
  const customProperties = {};
  const variableRegex = /--([\w-]+):\s*([^;]+);/g;
  let match;

  while ((match = variableRegex.exec(styleString)) !== null) {
    const [, variableName, value] = match;
    customProperties[variableName] = value.trim();
  }

  let updatedStyleString = styleString.replace(
    /var\(--([\w-]+)\)/g,
    (_, variableName) => {
      return customProperties[variableName] || `var(--${variableName})`;
    }
  );

  updatedStyleString = updatedStyleString
    .replace(/--[\w-]+:\s*[^;]+;/g, "")
    .trim();

  return updatedStyleString;
}

const breakpoints = {
  sm: "@media (min-width: 640px)",
  md: "@media (min-width: 768px)",
  lg: "@media (min-width: 1024px)",
  xl: "@media (min-width: 1280px)",
  "2xl": "@media (min-width: 1536px)",
};

function tws(classNames, convertToJson) {
  const cssString = generateTailwindCssString().replace(/\s\s+/g, " ");

  const cssObject = convertCssToObject(cssString);

  const classes = classNames.split(" ");
  let cssResult = classes.map((className) => {
    if (cssObject[className]) {
      return cssObject[className];
    } else if (className.includes("[")) {
      const customValue = className.match(/\[([^\]]+)\]/)[1];
      const baseKey = className.split("[")[0];
      if (cssObject[`${baseKey}custom`]) {
        return cssObject[`${baseKey}custom`].replace(
          /custom_value/g,
          customValue
        );
      }
    }
    return "";
  });
  cssResult = replaceAndRemoveCSSVariables(cssResult.join(""));
  cssResult = inlineStyleToJson(cssResult);

  if (!convertToJson) {
    cssResult = jsonToStyle(cssResult);
  }

  return cssResult;
}

function twsx(obj, parentSelector) {
  let cssString = "";

  for (const key in obj) {
    const newSelector = parentSelector
      ? key.startsWith(".") || key.startsWith(":")
        ? `${parentSelector}${key}`
        : `${parentSelector} ${key}`
      : key;

    if (Array.isArray(obj[key])) {
      const [baseStyle, nestedStyles] = obj[key];
      cssString += `${newSelector} { ${tws(baseStyle)} } `;

      if (typeof nestedStyles === "object") {
        cssString += twsx(nestedStyles, newSelector);
      }
    } else if (typeof obj[key] === "object" && key !== "breakpoint") {
      cssString += twsx(obj[key], newSelector);
    } else if (key === "breakpoint") {
      const mediaQueries = obj[key];
      for (const mediaKey in mediaQueries) {
        if (breakpoints[mediaKey]) {
          cssString += `${breakpoints[mediaKey]} { ${parentSelector} { ${tws(
            mediaQueries[mediaKey]
          )} } } `;
        }
      }
    }
  }

  return cssString;
}

export { tws, twsx };
