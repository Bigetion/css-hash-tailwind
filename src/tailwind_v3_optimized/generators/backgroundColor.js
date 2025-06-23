import { createColorGenerator } from "../utils/generatorFactory";

const generateBackgroundColor = createColorGenerator({
  prefix: "bg",
  property: "background-color",
  themeKey: "backgroundColor",
  supportsOpacity: true,
  opacityVar: "--bg-opacity"
});;

export default generateBackgroundColor;
