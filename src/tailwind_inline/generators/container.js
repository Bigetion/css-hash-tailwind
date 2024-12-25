import { generateCssString } from "../utils/index";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix = "" } = configOptions;

  const prefix = `${globalPrefix}container`;

  const responsiveCssString = generateCssString(({ orientationPrefix }) => {
    const cssString = `
      .${orientationPrefix}${prefix} {
        width: 100%;
      }
    `;
    return cssString;
  }, configOptions);

  return responsiveCssString;
}
