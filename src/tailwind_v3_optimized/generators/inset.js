import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateInset = createVariantGenerator({
  prefix: "",
  variants: {
    'inset': ['top', 'right', 'bottom', 'left'],
    'inset-x': ['right', 'left'],
    'inset-y': ['top', 'bottom'],
    'top': 'top',
    'right': 'right',
    'bottom': 'bottom',
    'left': 'left'
  },
  themeKey: "inset"
});;

export default generateInset;
