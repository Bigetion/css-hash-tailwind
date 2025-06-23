import { createVariantGenerator } from "../utils/generatorFactory";
import { generateCssString } from "../utils/index";

const generateScrollMargin = createVariantGenerator({
  prefix: "scroll-m",
  variants: {
    'default': 'scroll-margin',
    'y': ['scroll-margin-top', 'scroll-margin-bottom'],
    'x': ['scroll-margin-left', 'scroll-margin-right'],
    't': 'scroll-margin-top',
    'r': 'scroll-margin-right',
    'b': 'scroll-margin-bottom',
    'l': 'scroll-margin-left'
  },
  themeKey: "scrollMargin"
});;

export default generateScrollMargin;
