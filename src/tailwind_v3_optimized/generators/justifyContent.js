import { createSimpleGenerator } from "../utils/generatorFactory";

const generateJustifyContent = createSimpleGenerator({
  prefix: "justify",
  property: "justify-content",
  themeKey: "justifyContent"
});;

export default generateJustifyContent;
