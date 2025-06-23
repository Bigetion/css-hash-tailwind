import { createVariantGenerator } from "../utils/generatorFactory";
import { generateCssString } from "../utils/index";

const generateGap = createVariantGenerator({
  prefix: "gap",
  variants: {
    'default': 'gap',
    'x': 'column-gap',
    'y': 'row-gap'
  },
  themeKey: "gap"
});;

export default generateGap;
