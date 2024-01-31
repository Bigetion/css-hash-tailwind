import { cssHash } from "css-hash";

export const generateStripedBackground = ({
	color1: color1Tmp = "#ffffff",
	color2: color2Tmp = "#fafafa",
	size = 8,
	angle = 45,
	ratio = 50,
	invert,
}) => {
	let percentage = (ratio % 100) / 2;
	let color1 = color1Tmp;
	let color2 = color2Tmp;
	if (invert) {
		color1 = color2Tmp;
		color2 = color1Tmp;
	}
	return cssHash(
		(className) => `
      .${className} {
        background-image: linear-gradient(${angle}deg, ${color1} ${percentage}%, ${color2} ${percentage}%, ${color2} 50%, ${color1} 50%, ${color1} ${
			percentage + 50
		}%, ${color2} ${percentage + 50}%, ${color2} 100%);
        background-size: ${size}px ${size}px;
      }
    `
	);
};

export const purpleStripes = generateStripedBackground({
	color1: "#F9F2FF",
	color2: "#D5ACFB",
	ratio: 75,
	angle: 135,
});

export const fuchsiaStripes = generateStripedBackground({
	color1: "#F5EBF9",
	color2: "#E79BF5",
	ratio: 75,
	angle: 135,
});

export const skyStripes = generateStripedBackground({
	color1: "#E2F0F7",
	color2: "#7ACAEE",
	ratio: 75,
	angle: 135,
});
