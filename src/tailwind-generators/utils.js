import defaultConfigOptions from "./config";

export const getConfigOptions = (options = {}) => {
  const {
    prefix = "",
    screens = {},
    colors = {},
    spacing = {},
    extend: extendOptions = {},
    variants = {},
    corePlugins = {},
    theme = {},
  } = options;

  const {
    screens: screensExtend = {},
    colors: colorsExtend = {},
    spacing: spacingExtend = {},
  } = extendOptions;

  const newScreens = Object.assign(
    {},
    defaultConfigOptions.screens,
    screens,
    screensExtend
  );
  const newColors = Object.assign(
    {},
    defaultConfigOptions.colors,
    colors,
    colorsExtend
  );
  const newSpacing = Object.assign(
    {},
    defaultConfigOptions.spacing,
    spacing,
    spacingExtend
  );

  const {
    boxSizing: boxSizingVariants = [...defaultConfigOptions.variants.boxSizing],
    display: displayVariants = [...defaultConfigOptions.variants.display],
    float: floatVariants = [...defaultConfigOptions.variants.float],
    clear: clearVariants = [...defaultConfigOptions.variants.clear],
    objectFit: objectFitVariants = [...defaultConfigOptions.variants.objectFit],
    objectPosition: objectPositionVariants = [
      ...defaultConfigOptions.variants.objectPosition,
    ],
    overflow: overflowVariants = [...defaultConfigOptions.variants.overflow],
    overscrollBehavior: overscrollBehaviorVariants = [
      ...defaultConfigOptions.variants.overscrollBehavior,
    ],
    position: positionVariants = [...defaultConfigOptions.variants.position],
    inset: insetVariants = [...defaultConfigOptions.variants.inset],
    visibility: visibilityVariants = [
      ...defaultConfigOptions.variants.visibility,
    ],
    zIndex: zIndexVariants = [...defaultConfigOptions.variants.zIndex],
    extend: variantsExtend = {},
  } = variants;

  const {
    boxSizing: boxSizingVariantsExtend = [],
    display: displayVariantsExtend = [],
    float: floatVariantsExtend = [],
    clear: clearVariantsExtend = [],
    objectFit: objectFitVariantsExtend = [],
    objectPosition: objectPositionVariantsExtend = [],
    overflow: overflowVariantsExtend = [],
    overscrollBehavior: overscrollBehaviorVariantsExtend = [],
    position: positionVariantsExtend = [],
    inset: insetVariantsExtend = [],
    visibility: visibilityVariantsExtend = [],
    zIndex: zIndexVariantsExtend = [],
  } = variantsExtend;

  const newVariants = {
    boxSizing: [...boxSizingVariants, ...boxSizingVariantsExtend],
    display: [...displayVariants, ...displayVariantsExtend],
    float: [...floatVariants, ...floatVariantsExtend],
    clear: [...clearVariants, ...clearVariantsExtend],
    objectFit: [...objectFitVariants, ...objectFitVariantsExtend],
    objectPosition: [
      ...objectPositionVariants,
      ...objectPositionVariantsExtend,
    ],
    overflow: [...overflowVariants, ...overflowVariantsExtend],
    overscrollBehavior: [
      ...overscrollBehaviorVariants,
      ...overscrollBehaviorVariantsExtend,
    ],
    position: [...positionVariants, ...positionVariantsExtend],
    inset: [...insetVariants, ...insetVariantsExtend],
    visibility: [...visibilityVariants, ...visibilityVariantsExtend],
    zIndex: [...zIndexVariants, ...zIndexVariantsExtend],
  };

  const newCorePlugins = Object.assign(
    defaultConfigOptions.corePlugins,
    corePlugins
  );

  const {
    inset: insetTheme = {},
    zIndex: zIndexTheme = {},
    extend: themeExtend = {},
  } = theme;

  const {
    inset: insetThemeExtend = {},
    zIndex: zIndexThemeExtend = {},
  } = themeExtend;

  const newTheme = {
    inset: Object.assign(
      defaultConfigOptions.theme.inset,
      insetTheme,
      insetThemeExtend
    ),
    zIndex: Object.assign(
      defaultConfigOptions.theme.zIndex,
      zIndexTheme,
      zIndexThemeExtend
    ),
  };

  return {
    prefix,
    screens: newScreens,
    colors: newColors,
    spacing: newSpacing,
    variants: newVariants,
    corePlugins: newCorePlugins,
    theme: newTheme,
  };
};

export const generateCssString = (
  getCssString = () => {},
  options,
  isResponsive = true
) => {
  const { screens, colors } = options;
  let orientationPrefix = "";

  const pseudoClass = (value, pseudoElements = ["hover", "focus"]) => {
    const classArray = [`.${orientationPrefix}${value}`];
    if (Array.isArray(pseudoElements)) {
      let pseudoElementsNew = pseudoElements.slice(0);
      const responsiveIndex = pseudoElements.indexOf("responsive");
      if (responsiveIndex >= 0) {
        pseudoElementsNew.splice(responsiveIndex, 1);
      }
      pseudoElementsNew.forEach((pseudoItem) => {
        if (typeof pseudoItem === "string") {
          if (pseudoItem !== "") {
            classArray.push(
              `.${orientationPrefix}${pseudoItem}\\:${value}:${pseudoItem}`
            );
          }
        }
      });
    }
    return classArray.join(", ");
  };

  const getCssByOptions = (options = {}, getStr = () => {}) => {
    let nOptions = Object.assign({}, options);
    if (Array.isArray(options)) {
      nOptions = options.reduce(
        (currentObj, value) => Object.assign(currentObj, { [value]: value }),
        {}
      );
    }
    let str = "";
    Object.entries(nOptions).forEach(([key, value]) => {
      str += getStr(key, value);
    });
    return str;
  };

  const getCssFromColors = (getStr = () => {}) => {
    let str = "";
    Object.entries(colors).forEach(([key1, value1]) => {
      if (typeof value1 === "string") {
        str += `${getStr(key1, value1, hexToRgb(value1))} `;
      } else if (typeof value1 === "object") {
        Object.entries(value1).forEach(([key2, value2]) => {
          str += `${getStr(`${key1}-${key2}`, value2, hexToRgb(value2))} `;
        });
      }
    });
    return str;
  };

  let cssString = getCssString({
    orientationPrefix,
    pseudoClass,
    getCssByOptions,
    getCssFromColors,
  });

  if (isResponsive) {
    Object.entries(screens).forEach(([screen, screenValue]) => {
      orientationPrefix = `${screen}\\:`;
      cssString += `
        @media (min-width: ${screenValue}) {
          ${getCssString({
            orientationPrefix,
            pseudoClass,
            getCssByOptions,
            getCssFromColors,
          })}     
        }
      `;
    });
  }

  return cssString;
};

export const hexToRgb = (hex) => {
  return hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => "#" + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16))
    .join(",");
};
