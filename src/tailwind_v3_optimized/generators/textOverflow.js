import { createSimpleGenerator } from "../utils/generatorFactory";

const generateTextOverflow = createSimpleGenerator({
  prefix: "text",
  property: "text-overflow",
  themeKey: "textOverflow"
});;

export default generateTextOverflow;
