import { createSimpleGenerator } from "../utils/generatorFactory";

const generateLetterSpacing = createSimpleGenerator({
  prefix: "tracking",
  property: "letter-spacing",
  themeKey: "letterSpacing"
});;

export default generateLetterSpacing;
