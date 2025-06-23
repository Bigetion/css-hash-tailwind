import { createSimpleGenerator } from "../utils/generatorFactory";

const generateOpacity = createSimpleGenerator({
  prefix: "opacity",
  property: "opacity",
  themeKey: "opacity"
});;

export default generateOpacity;
