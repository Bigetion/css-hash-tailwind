import { createColorGenerator } from "../utils/generatorFactory";

const generateRingOffsetColor = createColorGenerator({
  prefix: "ring-offset",
  property: "--ring-offset-color",
  themeKey: "ringOffsetColor"
});;

export default generateRingOffsetColor;
