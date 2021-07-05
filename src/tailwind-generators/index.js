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
  return cssString;
}

export default generateTailwindCss;
