import { createSimpleGenerator } from "../utils/generatorFactory";

const generateWhitespace = createSimpleGenerator({
  prefix: "whitespace",
  property: "white-space",
  themeKey: "whitespace"
});;

export default generateWhitespace;
