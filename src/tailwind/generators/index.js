import generateBox from "./box";
import generateClear from "./clear";
import generateContainer from "./container";
import generateDisplay from "./display";
import generateFloat from "./float";
import generateObject from "./object";
import generateOverflow from "./overflow";
import generateOverscroll from "./overscroll";
import generatePosition from "./position";
import generateVisibility from "./visibility";
import generateZIndex from "./zindex";

const generateTailwindCss = (configOptions = {}) => {
  generateBox(configOptions);
  generateClear(configOptions);
  generateContainer(configOptions);
  generateDisplay(configOptions);
  generateFloat(configOptions);
  generateObject(configOptions);
  generateOverflow(configOptions);
  generateOverscroll(configOptions);
  generatePosition(configOptions);
  generateVisibility(configOptions);
  generateZIndex(configOptions);
};

export default generateTailwindCss;
