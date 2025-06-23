import { createColorGenerator } from "../utils/generatorFactory";

const generateFill = createColorGenerator({
  prefix: "fill",
  property: "fill",
  themeKey: "fill"
});;

export default generateFill;
