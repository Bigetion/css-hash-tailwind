import defaultConfigOptions from "./config";

export const getConfigOptions = (options = {}) => {
  const {
    prefix = "",
    screens = {},
    colors = {},
    extend: extendOptions = {},
    variants = {},
    corePlugins = {},
    theme = {},
  } = options;

  const {
    screens: screensExtend = {},
    colors: colorsExtend = {},
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
    flexDirection: flexDirectionVariants = [
      ...defaultConfigOptions.variants.flexDirection,
    ],
    flexWrap: flexWrapVariants = [...defaultConfigOptions.variants.flexWrap],
    flex: flexVariants = [...defaultConfigOptions.variants.flex],
    flexGrow: flexGrowVariants = [...defaultConfigOptions.variants.flexGrow],
    flexShrink: flexShrinkVariants = [
      ...defaultConfigOptions.variants.flexShrink,
    ],
    order: orderVariants = [...defaultConfigOptions.variants.order],
    gridTemplateColumns: gridTemplateColumnsVariants = [
      ...defaultConfigOptions.variants.gridTemplateColumns,
    ],
    gridColumn: gridColumnVariants = [
      ...defaultConfigOptions.variants.gridColumn,
    ],
    gridColumnStart: gridColumnStartVariants = [
      ...defaultConfigOptions.variants.gridColumnStart,
    ],
    gridColumnEnd: gridColumnEndVariants = [
      ...defaultConfigOptions.variants.gridColumnEnd,
    ],
    gridTemplateRows: gridTemplateRowsVariants = [
      ...defaultConfigOptions.variants.gridTemplateRows,
    ],
    gridRow: gridRowVariants = [...defaultConfigOptions.variants.gridRow],
    gridRowStart: gridRowStartVariants = [
      ...defaultConfigOptions.variants.gridRowStart,
    ],
    gridRowEnd: gridRowEndVariants = [
      ...defaultConfigOptions.variants.gridRowEnd,
    ],
    gridAutoFlow: gridAutoFlowVariants = [
      ...defaultConfigOptions.variants.gridAutoFlow,
    ],
    gridAutoColumns: gridAutoColumnsVariants = [
      ...defaultConfigOptions.variants.gridAutoColumns,
    ],
    gridAutoRows: gridAutoRowsVariants = [
      ...defaultConfigOptions.variants.gridAutoRows,
    ],
    gap: gapVariants = [...defaultConfigOptions.variants.gap],
    justifyContent: justifyContentVariants = [
      ...defaultConfigOptions.variants.justifyContent,
    ],
    justifyItems: justifyItemsVariants = [
      ...defaultConfigOptions.variants.justifyItems,
    ],
    justifySelf: justifySelfVariants = [
      ...defaultConfigOptions.variants.justifySelf,
    ],
    alignContent: alignContentVariants = [
      ...defaultConfigOptions.variants.alignContent,
    ],
    alignItems: alignItemsVariants = [
      ...defaultConfigOptions.variants.alignItems,
    ],
    alignSelf: alignSelfVariants = [...defaultConfigOptions.variants.alignSelf],
    placeContent: placeContentVariants = [
      ...defaultConfigOptions.variants.placeContent,
    ],
    placeItems: placeItemsVariants = [
      ...defaultConfigOptions.variants.placeItems,
    ],
    placeSelf: placeSelfVariants = [...defaultConfigOptions.variants.placeSelf],
    padding: paddingVariants = [...defaultConfigOptions.variants.padding],
    margin: marginVariants = [...defaultConfigOptions.variants.margin],
    space: spaceVariants = [...defaultConfigOptions.variants.space],
    width: widthVariants = [...defaultConfigOptions.variants.width],
    minWidth: minWidthVariants = [...defaultConfigOptions.variants.minWidth],
    maxWidth: maxWidthVariants = [...defaultConfigOptions.variants.maxWidth],
    height: heightVariants = [...defaultConfigOptions.variants.height],
    minHeight: minHeightVariants = [...defaultConfigOptions.variants.minHeight],
    maxHeight: maxHeightVariants = [...defaultConfigOptions.variants.maxHeight],
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
    flexDirection: flexDirectionVariantsExtend = [],
    flexWrap: flexWrapVariantsExtend = [],
    flex: flexVariantsExtend = [],
    flexGrow: flexGrowVariantsExtend = [],
    flexShrink: flexShrinkVariantsExtend = [],
    order: orderVariantsExtend = [],
    gridTemplateColumns: gridTemplateColumnsVariantsExtend = [],
    gridColumn: gridColumnVariantsExtend = [],
    gridColumnStart: gridColumnStartVariantsExtend = [],
    gridColumnEnd: gridColumnEndVariantsExtend = [],
    gridTemplateRows: gridTemplateRowsVariantsExtend = [],
    gridRow: gridRowVariantsExtend = [],
    gridRowStart: gridRowStartVariantsExtend = [],
    gridRowEnd: gridRowEndVariantsExtend = [],
    gridAutoFlow: gridAutoFlowVariantsExtend = [],
    gridAutoColumns: gridAutoColumnsVariantsExtend = [],
    gridAutoRows: gridAutoRowsVariantsExtend = [],
    gap: gapVariantsExtend = [],
    justifyContent: justifyContentVariantsExtend = [],
    justifyItems: justifyItemsVariantsExtend = [],
    justifySelf: justifySelfVariantsExtend = [],
    alignContent: alignContentVariantsExtend = [],
    alignItems: alignItemsVariantsExtend = [],
    alignSelf: alignSelfVariantsExtend = [],
    placeContent: placeContentVariantsExtend = [],
    placeItems: placeItemsVariantsExtend = [],
    placeSelf: placeSelfVariantsExtend = [],
    padding: paddingVariantsExtend = [],
    margin: marginVariantsExtend = [],
    space: spaceVariantsExtend = [],
    width: widthVariantsExtend = [],
    minWidth: minWidthVariantsExtend = [],
    maxWidth: maxWidthVariantsExtend = [],
    height: heightVariantsExtend = [],
    minHeight: minHeightVariantsExtend = [],
    maxHeight: maxHeightVariantsExtend = [],
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
    flexDirection: [...flexDirectionVariants, ...flexDirectionVariantsExtend],
    flexWrap: [...flexWrapVariants, ...flexWrapVariantsExtend],
    flex: [...flexVariants, ...flexVariantsExtend],
    flexGrow: [...flexGrowVariants, ...flexGrowVariantsExtend],
    flexShrink: [...flexShrinkVariants, ...flexShrinkVariantsExtend],
    order: [...orderVariants, ...orderVariantsExtend],
    gridTemplateColumns: [
      ...gridTemplateColumnsVariants,
      ...gridTemplateColumnsVariantsExtend,
    ],
    gridColumn: [...gridColumnVariants, ...gridColumnVariantsExtend],
    gridColumnStart: [
      ...gridColumnStartVariants,
      ...gridColumnStartVariantsExtend,
    ],
    gridColumnEnd: [...gridColumnEndVariants, ...gridColumnEndVariantsExtend],
    gridTemplateRows: [
      ...gridTemplateRowsVariants,
      ...gridTemplateRowsVariantsExtend,
    ],
    gridRow: [...gridRowVariants, ...gridRowVariantsExtend],
    gridRowStart: [...gridRowStartVariants, ...gridRowStartVariantsExtend],
    gridRowEnd: [...gridRowEndVariants, ...gridRowEndVariantsExtend],
    gridAutoFlow: [...gridAutoFlowVariants, ...gridAutoFlowVariantsExtend],
    gridAutoColumns: [
      ...gridAutoColumnsVariants,
      ...gridAutoColumnsVariantsExtend,
    ],
    gridAutoRows: [...gridAutoRowsVariants, ...gridAutoRowsVariantsExtend],
    gap: [...gapVariants, ...gapVariantsExtend],
    justifyContent: [
      ...justifyContentVariants,
      ...justifyContentVariantsExtend,
    ],
    justifyItems: [...justifyItemsVariants, ...justifyItemsVariantsExtend],
    justifySelf: [...justifySelfVariants, ...justifySelfVariantsExtend],
    alignContent: [...alignContentVariants, ...alignContentVariantsExtend],
    alignItems: [...alignItemsVariants, ...alignItemsVariantsExtend],
    alignSelf: [...alignSelfVariants, ...alignSelfVariantsExtend],
    placeContent: [...placeContentVariants, ...placeContentVariantsExtend],
    placeItems: [...placeItemsVariants, ...placeItemsVariantsExtend],
    placeSelf: [...placeSelfVariants, ...placeSelfVariantsExtend],
    padding: [...paddingVariants, ...paddingVariantsExtend],
    margin: [...marginVariants, ...marginVariantsExtend],
    space: [...spaceVariants, ...spaceVariantsExtend],
    width: [...widthVariants, ...widthVariantsExtend],
    minWidth: [...minWidthVariants, ...minWidthVariantsExtend],
    maxWidth: [...maxWidthVariants, ...maxWidthVariantsExtend],
    height: [...heightVariants, ...heightVariantsExtend],
    minHeight: [...minHeightVariants, ...minHeightVariantsExtend],
    maxHeight: [...maxHeightVariants, ...maxHeightVariantsExtend],
  };

  const newCorePlugins = Object.assign(
    defaultConfigOptions.corePlugins,
    corePlugins
  );

  const {
    spacing: spacingTheme = {},
    inset: insetTheme = {},
    zIndex: zIndexTheme = {},
    flex: flexTheme = {},
    flexGrow: flexGrowTheme = {},
    flexShrink: flexShrinkTheme = {},
    order: orderTheme = {},
    gridTemplateColumns: gridTemplateColumnsTheme = {},
    gridColumn: gridColumnTheme = {},
    gridColumnStart: gridColumnStartTheme = {},
    gridColumnEnd: gridColumnEndTheme = {},
    gridTemplateRows: gridTemplateRowsTheme = {},
    gridRow: gridRowTheme = {},
    gridRowStart: gridRowStartTheme = {},
    gridRowEnd: gridRowEndTheme = {},
    gridAutoColumns: gridAutoColumnsTheme = {},
    gridAutoRows: gridAutoRowsTheme = {},
    gap: gapTheme = {},
    padding: paddingTheme = {},
    margin: marginTheme = {},
    space: spaceTheme = {},
    width: widthTheme = {},
    minWidth: minWidthTheme = {},
    maxWidth: maxWidthTheme = {},
    height: heightTheme = {},
    minHeight: minHeightTheme = {},
    maxHeight: maxHeightTheme = {},
    extend: themeExtend = {},
  } = theme;

  const {
    spacing: spacingThemeExtend = {},
    inset: insetThemeExtend = {},
    zIndex: zIndexThemeExtend = {},
    flex: flexThemeExtend = {},
    flexGrow: flexGrowThemeExtend = {},
    flexShrink: flexShrinkThemeExtend = {},
    order: orderThemeExtend = {},
    gridTemplateColumns: gridTemplateColumnsThemeExtend = {},
    gridColumn: gridColumnThemeExtend = {},
    gridColumnStart: gridColumnStartThemeExtend = {},
    gridColumnEnd: gridColumnEndThemeExtend = {},
    gridTemplateRows: gridTemplateRowsThemeExtend = {},
    gridRow: gridRowThemeExtend = {},
    gridRowStart: gridRowStartThemeExtend = {},
    gridRowEnd: gridRowEndThemeExtend = {},
    gridAutoColumns: gridAutoColumnsThemeExtend = {},
    gridAutoRows: gridAutoRowsThemeExtend = {},
    gap: gapThemeExtend = {},
    padding: paddingThemeExtend = {},
    margin: marginThemeExtend = {},
    space: spaceThemeExtend = {},
    width: widthThemeExtend = {},
    minWidth: minWidthThemeExtend = {},
    maxWidth: maxWidthThemeExtend = {},
    height: heightThemeExtend = {},
    minHeight: minHeightThemeExtend = {},
    maxHeight: maxHeightThemeExtend = {},
  } = themeExtend;

  const newTheme = {
    spacing: Object.assign(
      defaultConfigOptions.theme.spacing,
      spacingTheme,
      spacingThemeExtend
    ),
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
    flex: Object.assign(
      defaultConfigOptions.theme.flex,
      flexTheme,
      flexThemeExtend
    ),
    flexGrow: Object.assign(
      defaultConfigOptions.theme.flexGrow,
      flexGrowTheme,
      flexGrowThemeExtend
    ),
    flexShrink: Object.assign(
      defaultConfigOptions.theme.flexShrink,
      flexShrinkTheme,
      flexShrinkThemeExtend
    ),
    order: Object.assign(
      defaultConfigOptions.theme.order,
      orderTheme,
      orderThemeExtend
    ),
    gridTemplateColumns: Object.assign(
      defaultConfigOptions.theme.gridTemplateColumns,
      gridTemplateColumnsTheme,
      gridTemplateColumnsThemeExtend
    ),
    gridColumn: Object.assign(
      defaultConfigOptions.theme.gridColumn,
      gridColumnTheme,
      gridColumnThemeExtend
    ),
    gridColumnStart: Object.assign(
      defaultConfigOptions.theme.gridColumnStart,
      gridColumnStartTheme,
      gridColumnStartThemeExtend
    ),
    gridColumnEnd: Object.assign(
      defaultConfigOptions.theme.gridColumnEnd,
      gridColumnEndTheme,
      gridColumnEndThemeExtend
    ),
    gridTemplateRows: Object.assign(
      defaultConfigOptions.theme.gridTemplateRows,
      gridTemplateRowsTheme,
      gridTemplateRowsThemeExtend
    ),
    gridRow: Object.assign(
      defaultConfigOptions.theme.gridRow,
      gridRowTheme,
      gridRowThemeExtend
    ),
    gridRowStart: Object.assign(
      defaultConfigOptions.theme.gridRowStart,
      gridRowStartTheme,
      gridRowStartThemeExtend
    ),
    gridRowEnd: Object.assign(
      defaultConfigOptions.theme.gridRowEnd,
      gridRowEndTheme,
      gridRowEndThemeExtend
    ),
    gridAutoColumns: Object.assign(
      defaultConfigOptions.theme.gridAutoColumns,
      gridAutoColumnsTheme,
      gridAutoColumnsThemeExtend
    ),
    gridAutoRows: Object.assign(
      defaultConfigOptions.theme.gridAutoRows,
      gridAutoRowsTheme,
      gridAutoRowsThemeExtend
    ),
    gap: Object.assign(
      defaultConfigOptions.theme.gap,
      gapTheme,
      gapThemeExtend
    ),
    padding: Object.assign(
      defaultConfigOptions.theme.padding,
      paddingTheme,
      paddingThemeExtend
    ),
    margin: Object.assign(
      defaultConfigOptions.theme.margin,
      marginTheme,
      marginThemeExtend
    ),
    space: Object.assign(
      defaultConfigOptions.theme.space,
      spaceTheme,
      spaceThemeExtend
    ),
    width: Object.assign(
      defaultConfigOptions.theme.width,
      widthTheme,
      widthThemeExtend
    ),
    minWidth: Object.assign(
      defaultConfigOptions.theme.minWidth,
      minWidthTheme,
      minWidthThemeExtend
    ),
    maxWidth: Object.assign(
      defaultConfigOptions.theme.maxWidth,
      maxWidthTheme,
      maxWidthThemeExtend
    ),
    height: Object.assign(
      defaultConfigOptions.theme.height,
      heightTheme,
      heightThemeExtend
    ),
    minHeight: Object.assign(
      defaultConfigOptions.theme.minHeight,
      minHeightTheme,
      minHeightThemeExtend
    ),
    maxHeight: Object.assign(
      defaultConfigOptions.theme.maxHeight,
      maxHeightTheme,
      maxHeightThemeExtend
    ),
  };

  return {
    prefix,
    screens: newScreens,
    colors: newColors,
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