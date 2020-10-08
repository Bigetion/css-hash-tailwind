import { cssHash } from "css-hash";

import {
  generateBase,
  generateForm,
  generateAlign,
  generateBg,
  generateBorder,
  generateBox,
  generateClear,
  generateContainer,
  generateDisplay,
  generateDivide,
  generateFlex,
  generateFloat,
  generateGradient,
  generateGrid,
  generateHeight,
  generateInteractivity,
  generateJustify,
  generateLeading,
  generateList,
  generateMargin,
  generateObject,
  generateOpacity,
  generateOverflow,
  generateOverscroll,
  generatePadding,
  generatePlace,
  generatePlaceholder,
  generatePosition,
  generateShadow,
  generateSpace,
  generateTable,
  generateText,
  generateTracking,
  generateTransform,
  generateVisibility,
  generateWidth,
  generateZIndex,
} from "tailwind-css-generator";

let cssString = "";
cssString += generateBase();
cssString += generateForm();
cssString += generateAlign();
cssString += generateBg();
cssString += generateBorder();
cssString += generateBox();
cssString += generateClear();
cssString += generateContainer();
cssString += generateDisplay();
cssString += generateDivide();
cssString += generateFlex();
cssString += generateFloat();
cssString += generateGradient();
cssString += generateGrid();
cssString += generateHeight();
cssString += generateInteractivity();
cssString += generateJustify();
cssString += generateLeading();
cssString += generateList();
cssString += generateMargin();
cssString += generateObject();
cssString += generateOpacity();
cssString += generateOverflow();
cssString += generateOverscroll();
cssString += generatePadding();
cssString += generatePlace();
cssString += generatePlaceholder();
cssString += generatePosition();
cssString += generateShadow();
cssString += generateSpace();
cssString += generateTable();
cssString += generateText();
cssString += generateTracking();
cssString += generateTransform();
cssString += generateVisibility();
cssString += generateWidth();
cssString += generateZIndex();

cssHash(() => cssString);
