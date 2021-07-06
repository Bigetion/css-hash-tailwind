import { getConfigOptions } from "./utils";

import generateContainer from "./generators/container";
import generateBoxSizing from "./generators/boxSizing";
import generateDisplay from "./generators/display";
import generateFloat from "./generators/float";
import generateClear from "./generators/clear";
import generateObjectFit from "./generators/objectFit";
import generateObjectPosition from "./generators/objectPosition";
import generateOverflow from "./generators/overflow";
import generateOverscrollBehavior from "./generators/overscrollBehavior";
import generatePosition from "./generators/position";
import generateInset from "./generators/inset";
import generateVisibility from "./generators/visibility";
import generateZIndex from "./generators/zIndex";
import generateFlexDirection from "./generators/flexDirection";
import generateFlexWrap from "./generators/flexWrap";
import generateFlex from "./generators/flex";
import generateFlexGrow from "./generators/flexGrow";
import generateFlexShrink from "./generators/flexShrink";
import generateOrder from "./generators/order";
import generateGridTemplateColumns from "./generators/gridTemplateColumns";
import generateGridColumn from "./generators/gridColumn";
import generateGridColumnStart from "./generators/gridColumnStart";
import generateGridColumnEnd from "./generators/gridColumnEnd";
import generateGridTemplateRows from "./generators/gridTemplateRows";
import generateGridRow from "./generators/gridRow";
import generateGridRowStart from "./generators/gridRowStart";
import generateGridRowEnd from "./generators/gridRowEnd";
import generateGridAutoFlow from "./generators/gridAutoFlow";
import generateGridAutoColumns from "./generators/gridAutoFlow";
import generateGridAutoRows from "./generators/gridAutoRows";
import generateGap from "./generators/gap";
import generateJustifyContent from "./generators/justifyContent";
import generateJustifyItems from "./generators/justifyItems";
import generateJustifySelf from "./generators/justifySelf";
import generateAlignContent from "./generators/alignContent";
import generateAlignItems from "./generators/alignItems";
import generateAlignSelf from "./generators/alignSelf";
import generatePlaceContent from "./generators/placeContent";
import generatePlaceItems from "./generators/placeItems";
import generatePlaceSelf from "./generators/placeSelf";

function generateTailwindCss(options = {}) {
  const configOptions = getConfigOptions(options);
  const { corePlugins = {} } = configOptions;
  let cssString = "";
  cssString += corePlugins.container ? generateContainer(configOptions) : "";
  cssString += corePlugins.boxSizing ? generateBoxSizing(configOptions) : "";
  cssString += corePlugins.display ? generateDisplay(configOptions) : "";
  cssString += corePlugins.float ? generateFloat(configOptions) : "";
  cssString += corePlugins.clear ? generateClear(configOptions) : "";
  cssString += corePlugins.objectFit ? generateObjectFit(configOptions) : "";
  cssString += corePlugins.objectPosition
    ? generateObjectPosition(configOptions)
    : "";
  cssString += corePlugins.overflow ? generateOverflow(configOptions) : "";
  cssString += corePlugins.overscrollBehavior
    ? generateOverscrollBehavior(configOptions)
    : "";
  cssString += corePlugins.position ? generatePosition(configOptions) : "";
  cssString += corePlugins.inset ? generateInset(configOptions) : "";
  cssString += corePlugins.visibility ? generateVisibility(configOptions) : "";
  cssString += corePlugins.zIndex ? generateZIndex(configOptions) : "";
  cssString += corePlugins.flexDirection
    ? generateFlexDirection(configOptions)
    : "";
  cssString += corePlugins.flexWrap ? generateFlexWrap(configOptions) : "";
  cssString += corePlugins.flex ? generateFlex(configOptions) : "";
  cssString += corePlugins.flexGrow ? generateFlexGrow(configOptions) : "";
  cssString += corePlugins.flexShrink ? generateFlexShrink(configOptions) : "";
  cssString += corePlugins.order ? generateOrder(configOptions) : "";
  cssString += corePlugins.gridTemplateColumns
    ? generateGridTemplateColumns(configOptions)
    : "";
  cssString += corePlugins.gridColumn ? generateGridColumn(configOptions) : "";
  cssString += corePlugins.gridColumnStart
    ? generateGridColumnStart(configOptions)
    : "";
  cssString += corePlugins.gridColumnEnd
    ? generateGridColumnEnd(configOptions)
    : "";
  cssString += corePlugins.gridTemplateRows
    ? generateGridTemplateRows(configOptions)
    : "";
  cssString += corePlugins.gridRow ? generateGridRow(configOptions) : "";
  cssString += corePlugins.gridRowStart
    ? generateGridRowStart(configOptions)
    : "";
  cssString += corePlugins.gridRowEnd ? generateGridRowEnd(configOptions) : "";
  cssString += corePlugins.gridAutoFlow
    ? generateGridAutoFlow(configOptions)
    : "";
  cssString += corePlugins.gridAutoColumns
    ? generateGridAutoColumns(configOptions)
    : "";
  cssString += corePlugins.gridAutoRows
    ? generateGridAutoRows(configOptions)
    : "";
  cssString += corePlugins.gap ? generateGap(configOptions) : "";
  cssString += corePlugins.justifyContent
    ? generateJustifyContent(configOptions)
    : "";
  cssString += corePlugins.justifyItems
    ? generateJustifyItems(configOptions)
    : "";
  cssString += corePlugins.justifySelf
    ? generateJustifySelf(configOptions)
    : "";
  cssString += corePlugins.alignContent
    ? generateAlignContent(configOptions)
    : "";
  cssString += corePlugins.alignItems ? generateAlignItems(configOptions) : "";
  cssString += corePlugins.alignSelf ? generateAlignSelf(configOptions) : "";
  cssString += corePlugins.placeContent
    ? generatePlaceContent(configOptions)
    : "";
  cssString += corePlugins.placeItems ? generatePlaceItems(configOptions) : "";
  cssString += corePlugins.placeSelf ? generatePlaceSelf(configOptions) : "";
  return cssString;
}

export default generateTailwindCss;
