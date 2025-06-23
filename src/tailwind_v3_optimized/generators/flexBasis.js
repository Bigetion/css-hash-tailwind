import { createSimpleGenerator } from "../utils/generatorFactory";

const generateFlexBasis = createSimpleGenerator({
  prefix: "basis",
  property: "flex-basis",
  themeKey: "flexBasis"
});;

export default generateFlexBasis;
