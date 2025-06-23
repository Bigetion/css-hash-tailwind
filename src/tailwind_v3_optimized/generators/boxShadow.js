import { createSimpleGenerator } from "../utils/generatorFactory";

const generateBoxShadow = createSimpleGenerator({
  prefix: "shadow",
  property: "box-shadow",
  themeKey: "boxShadow"
});;

export default generateBoxShadow;
