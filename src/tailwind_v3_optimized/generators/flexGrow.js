import { createSimpleGenerator } from "../utils/generatorFactory";

const generateFlexGrow = createSimpleGenerator({
  prefix: "grow",
  property: "flex-grow",
  themeKey: "flexGrow"
});;

export default generateFlexGrow;
