import { createSimpleGenerator } from "../utils/generatorFactory";

const generateTextTransform = createSimpleGenerator({
  prefix: "text",
  property: "text-transform",
  themeKey: "textTransform"
});;

export default generateTextTransform;
