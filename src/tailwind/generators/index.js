import generateAlign from "./align";
import generateBase from "./base";
import generateBg from "./bg";
import generateBorder from "./border";
import generateBox from "./box";
import generateClear from "./clear";
import generateContainer from "./container";
import generateDisplay from "./display";
import generateDivide from "./divide";
import generateFlex from "./flex";
import generateFloat from "./float";
import generateForm from "./form";
import generateGradient from "./gradient";
import generateGrid from "./grid";
import generateObject from "./object";
import generateOverflow from "./overflow";
import generateOverscroll from "./overscroll";
import generatePosition from "./position";
import generateVisibility from "./visibility";
import generateZIndex from "./zindex";

const generateTailwindCss = (configOptions = {}) => {
  generateAlign(configOptions);
  generateBase(configOptions);
  generateBg(configOptions);
  generateBorder(configOptions);
  generateBox(configOptions);
  generateClear(configOptions);
  generateContainer(configOptions);
  generateDisplay(configOptions);
  generateDivide(configOptions);
  generateFlex(configOptions);
  generateFloat(configOptions);
  generateForm(configOptions);
  generateGradient(configOptions);
  generateGrid(configOptions);
  generateObject(configOptions);
  generateOverflow(configOptions);
  generateOverscroll(configOptions);
  generatePosition(configOptions);
  generateVisibility(configOptions);
  generateZIndex(configOptions);
};

export default generateTailwindCss;
