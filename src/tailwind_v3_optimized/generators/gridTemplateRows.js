import { createSimpleGenerator } from "../utils/generatorFactory";

const generateGridTemplateRows = createSimpleGenerator({
  prefix: "grid-rows",
  property: "grid-template-rows",
  themeKey: "gridTemplateRows"
});;

export default generateGridTemplateRows;
