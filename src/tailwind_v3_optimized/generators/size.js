import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateSize = createVariantGenerator({
  prefix: "",
  variants: {
    'size': ['width', 'height']
  },
  themeKey: "size"
});;

export default generateSize;
