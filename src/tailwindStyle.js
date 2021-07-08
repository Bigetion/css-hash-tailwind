import { cssHash } from "css-hash";

import {
  // generateAlign,
  // generateBase,
  // generateBg,
  // generateBorder,
  // generateBox,
  // generateClear,
  // generateContainer,
  // generateDisplay,
  // generateDivide,
  // generateFlex,
  // generateFloat,
  // generateForm,
  // generateGradient,
  // generateGrid,
  // generateHeight,
  generateInteractivity,
  // generateJustify,
  generateLeading,
  generateList,
  // generateMargin,
  // generateObject,
  generateOpacity,
  // generateOverflow,
  // generateOverscroll,
  // generatePadding,
  // generatePlace,
  // generatePlaceholder,
  // generatePosition,
  generateShadow,
  // generateSpace,
  generateSvg,
  generateTable,
  // generateText,
  generateTracking,
  generateTransform,
  // generateVisibility,
  // generateWidth,
  // generateZIndex,
} from "tailwind-css-generator";

import generateTailwindCss from "tailwind-generators";

// console.log(generateWidth());
// console.log("AAAAAAAAAAAAAAAAAAAAA");
console.log(generateTailwindCss());

cssHash(() =>
  generateTailwindCss({
    corePlugins: {
      base: true,
      form: true,
      container: true,
      boxSizing: true,
      display: true,
      float: true,
      clear: true,
      objectFit: true,
      objectPosition: true,
      overflow: true,
      overscrollBehavior: true,
      position: true,
      inset: true,
      visibility: true,
      zIndex: true,
      flexDirection: true,
      flexWrap: true,
      flex: true,
      flexGrow: true,
      flexShrink: true,
      order: true,
      gridTemplateColumns: true,
      gridColumn: true,
      gridColumnStart: true,
      gridColumnEnd: true,
      gridTemplateRows: true,
      gridRow: true,
      gridRowStart: true,
      gridRowEnd: true,
      gridAutoFlow: true,
      gridAutoColumns: true,
      gridAutoRows: true,
      gap: true,
      justifyContent: true,
      justifyItems: true,
      justifySelf: true,
      alignContent: true,
      alignItems: true,
      alignSelf: true,
      placeContent: true,
      placeItems: true,
      placeSelf: true,
      padding: true,
      margin: true,
      space: true,
      width: true,
      minWidth: true,
      maxWidth: true,
      height: true,
      minHeight: true,
      maxHeight: true,
      fontSize: true,
      fontSmoothing: true,
      fontStyle: true,
      fontWeight: true,
      fontVariantNumeric: true,
      letterSpacing: true,
      lineHeight: true,
      listStyleType: true,
      listStylePosition: true,
      placeholderColor: true,
      placeholderOpacity: true,
      textAlign: true,
      textColor: true,
      textOpacity: true,
      textDecoration: true,
      textTransform: true,
      verticalAlign: true,
      whitespace: true,
      wordBreak: true,
      backgroundAttachment: true,
      backgroundClip: true,
      backgroundColor: true,
      backgroundOpacity: true,
      backgroundPosition: true,
      backgroundRepeat: true,
      backgroundSize: true,
      backgroundImage: true,
      gradientColorStops: true,
      borderRadius: true,
      borderWidth: true,
      borderColor: true,
      borderOpacity: true,
      borderStyle: true,
      divideWidth: true,
      divideColor: true,
      divideOpacity: true,
      divideStyle: true,
    },
  })
);

// cssHash(() => generateAlign());
// cssHash(() => generateBase());
// cssHash(() => generateBg());
// cssHash(() => generateBorder());
// cssHash(() => generateBox());
// cssHash(() => generateClear());
// cssHash(() => generateContainer());
// cssHash(() => generateDisplay());
// cssHash(() => generateDivide());
// cssHash(() => generateFlex());
// cssHash(() => generateFloat());
// cssHash(() => generateForm());
// cssHash(() => generateGradient());
// cssHash(() => generateGrid());
// cssHash(() => generateHeight());
cssHash(() => generateInteractivity());
// cssHash(() => generateJustify());
cssHash(() => generateLeading());
cssHash(() => generateList());
// cssHash(() => generateMargin());
// cssHash(() => generateObject());
cssHash(() => generateOpacity());
// cssHash(() => generateOverflow());
// cssHash(() => generateOverscroll());
// cssHash(() => generatePadding());
// cssHash(() => generatePlace());
// cssHash(() => generatePlaceholder());
// cssHash(() => generatePosition());
cssHash(() => generateShadow());
// cssHash(() => generateSpace());
cssHash(() => generateSvg());
cssHash(() => generateTable());
// cssHash(() => generateText());
cssHash(() => generateTracking());
cssHash(() => generateTransform());
// cssHash(() => generateVisibility());
// cssHash(() => generateWidth());
// cssHash(() => generateZIndex());
