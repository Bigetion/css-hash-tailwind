import { createSimpleGenerator } from "../utils/generatorFactory";

const generateAlignContent = createSimpleGenerator({
  prefix: "content",
  property: "align-content",
  themeKey: "alignContent"
});;

export default generateAlignContent;
