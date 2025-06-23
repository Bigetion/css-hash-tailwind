import { createColorGenerator } from "../utils/generatorFactory";

const generateStroke = createColorGenerator({
  prefix: "stroke",
  property: "stroke",
  themeKey: "stroke"
});;

export default generateStroke;
