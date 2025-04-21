import { generateCssString } from "../utils/index";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, theme = {} } = configOptions;

  const prefix = `${globalPrefix}bg`;

  const { backgroundColor = {} } = theme;

  const responsiveCssString = generateCssString(({ getCssByColors }) => {
    const cssString = getCssByColors(
      backgroundColor,
      (key, value, rgbValue) => {
        let rgbPropertyValue = "";
        if (rgbValue) {
          rgbPropertyValue = `background-color: rgba(${rgbValue}, var(--bg-opacity));`;
        }

        if (value === "custom_value") {
          const style = new Option().style;
          style.color = "";
          style.color = value;
          const isColor = style.color !== "";
          return `
            ${prefix}-${key} {
              ${isColor ? "background-color" : "background"}: ${value};
            }
          `;
        }

        return `
            ${prefix}-${key} {
              --bg-opacity: 1;
              background-color: ${value};
              ${rgbPropertyValue}
            }
          `;
      }
    );
    return cssString;
  }, configOptions);

  return responsiveCssString;
}
