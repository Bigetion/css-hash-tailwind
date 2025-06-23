import { createColorGenerator } from "../utils/generatorFactory";

const generateOutlineColor = createColorGenerator({
  prefix: "outline",
  property: "outline-color",
  themeKey: "outlineColor",
  supportsOpacity: true,
  opacityVar: "--outline-opacity"
});;

export default generateOutlineColor;
