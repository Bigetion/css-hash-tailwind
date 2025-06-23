import { createSimpleGenerator } from "../utils/generatorFactory";

const generateAlignSelf = createSimpleGenerator({
  prefix: "self",
  property: "align-self",
  themeKey: "alignSelf"
});;

export default generateAlignSelf;
