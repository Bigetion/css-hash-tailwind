import defaultConfigOptions from "../config/index";

const getConfigOptions = (options = {}) => {
  const {
    prefix = "",
    variants = {},
    corePlugins = {},
    theme = {},
    form = {},
  } = options;

  const { extend: variantsExtend = {} } = variants;
  const newVariants = {};
  Object.keys(defaultConfigOptions.variants).forEach((key) => {
    newVariants[key] = variants[key] || defaultConfigOptions.variants[key];
    if (variantsExtend[key]) {
      if (Array.isArray(variantsExtend[key])) {
        newVariants[key] = [].concat(newVariants[key], variantsExtend[key]);
      }
    }
  });

  const newCorePlugins = Object.assign(
    {},
    defaultConfigOptions.corePlugins,
    corePlugins
  );

  const { extend: themeExtend = {} } = theme;
  const newTheme = {};
  Object.keys(defaultConfigOptions.theme).forEach((key) => {
    newTheme[key] = theme[key] || defaultConfigOptions.theme[key];
    if (themeExtend[key]) {
      newTheme[key] = Object.assign({}, newTheme[key], themeExtend[key]);
    }
  });

  return {
    prefix,
    variants: newVariants,
    corePlugins: newCorePlugins,
    theme: newTheme,
    form,
  };
};

const generateCssString = (
  getCssString = () => {},
  options = {},
  isResponsive = true
) => {
  const { theme = {} } = options;
  const { screens = {} } = theme;
  let orientationPrefix = "";

  const isFunction = (functionToCheck) => {
    return (
      functionToCheck &&
      {}.toString.call(functionToCheck) === "[object Function]"
    );
  };

  const hexToRgb = (hex) => {
    const rgba = hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (...args) =>
          "#" + args[1] + args[1] + args[2] + args[2] + args[3] + args[3]
      )
      .substring(1)
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16))
      .join(",");

    if (rgba.indexOf("NaN") >= 0) return "";
    return rgba;
  };

  const pseudoClass = (value, pseudoElements = ["hover", "focus"]) => {
    const classArray = [
      `.${orientationPrefix}${isFunction(value) ? value("") : value}`,
    ];
    if (Array.isArray(pseudoElements)) {
      pseudoElements.forEach((pseudoItem) => {
        if (typeof pseudoItem === "string") {
          if (
            pseudoItem !== "" &&
            [
              "responsive",
              "group-hover",
              "group-focus",
              "first",
              "last",
              "odd",
              "even",
            ].indexOf(pseudoItem) < 0
          ) {
            classArray.push(
              `.${orientationPrefix}${pseudoItem}\\:${
                isFunction(value)
                  ? value(`:${pseudoItem}`)
                  : `${value}:${pseudoItem}`
              }`
            );
          }
        }
      });
      ["hover", "focus"].forEach((item) => {
        if (pseudoElements.indexOf(`group-${item}`) >= 0) {
          classArray.push(
            `.group:${item} .${orientationPrefix}group-${item}\\:${
              isFunction(value) ? value() : value
            }`
          );
        }
      });
      ["first", "last"].forEach((item) => {
        if (pseudoElements.indexOf(item) >= 0) {
          classArray.push(
            `.${orientationPrefix}${item}\\:${
              isFunction(value)
                ? value(`:${item}-child`)
                : `${value}:${item}-child`
            }`
          );
        }
      });
      ["odd", "even"].forEach((item) => {
        if (pseudoElements.indexOf(item) >= 0) {
          classArray.push(
            `.${orientationPrefix}${item}\\:${
              isFunction(value)
                ? value(`:nth-child(${item})`)
                : `${value}:nth-child(${item})`
            }`
          );
        }
      });
    }
    return classArray.join(", ");
  };

  const getCssByOptions = (options = {}, getStr = () => {}) => {
    let nOptions = Object.assign({}, options);
    if (Array.isArray(options)) {
      nOptions = options.reduce(
        (currentObj, value) =>
          Object.assign({}, currentObj, { [value]: value }),
        {}
      );
    }
    let str = "";
    Object.entries(nOptions).forEach(([key, value]) => {
      str += getStr(key.replace("/", `\\/`).replace(".", "\\."), value);
    });
    return str;
  };

  const getCssByColors = (colors, getStr = () => {}) => {
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
    getCssByColors,
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
            getCssByColors,
          })}     
        }
      `;
    });
  }

  return cssString;
};

export { getConfigOptions, generateCssString };