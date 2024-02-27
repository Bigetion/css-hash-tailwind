import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
	const { prefix: globalPrefix, variants = {} } = configOptions;

	const prefix = `${globalPrefix}snap`;

	const propertyOptions = {
		none: "none",
		x: "x var(--scroll-snap-strictness)",
		y: "y var(--scroll-snap-strictness)",
		both: "both var(--scroll-snap-strictness)",
	};

	const responsiveCssString = generateCssString(
		({ pseudoClass, getCssByOptions }) => {
			let cssString = getCssByOptions(
				propertyOptions,
				(key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.scrollSnapType)} {
            --scroll-snap-strictness: proximity;
            scroll-snap-type: ${value};
          }
        `
			);
			cssString += getCssByOptions(
				["mandatory", "proximity"],
				(key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.scrollSnapType)} {
            --scroll-snap-strictness: ${value};
          }
        `
			);
			return cssString;
		},
		configOptions,
		variants.scrollSnapType.indexOf("responsive") >= 0
	);

	return responsiveCssString;
}
