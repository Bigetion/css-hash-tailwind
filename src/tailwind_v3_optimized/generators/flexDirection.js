import { createSimpleGenerator } from "../utils/generatorFactory";

const generateFlexDirection = createSimpleGenerator({
  prefix: "flex",
  property: "flex-direction",
  themeKey: "flexDirection"
});;

export default generateFlexDirection;
