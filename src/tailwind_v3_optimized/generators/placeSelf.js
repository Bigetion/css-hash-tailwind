import { createSimpleGenerator } from "../utils/generatorFactory";

const generatePlaceSelf = createSimpleGenerator({
  prefix: "place-self",
  property: "place-self",
  themeKey: "placeSelf"
});;

export default generatePlaceSelf;
