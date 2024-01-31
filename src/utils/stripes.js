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
  color1: "rgba(213, 172, 251, 0.3)",
  color2: "rgba(213, 172, 251, 1)",
  ratio: 75,
  angle: 135,
});

export const fuchsiaStripes = generateStripedBackground({
  color1: "rgba(231, 155, 245, 0.3)",
  color2: "rgba(231, 155, 245, 1)",
  ratio: 75,
  angle: 135,
});

export const skyStripes = generateStripedBackground({
  color1: "rgba(122, 202, 238, 0.3)",
  color2: "rgba(122, 202, 238, 1)",
  ratio: 75,
  angle: 135,
});

export const grayStripes = generateStripedBackground({
  color1: "rgb(211, 215, 221, 0.3)",
  color2: "rgb(211, 215, 221, 1)",
  ratio: 75,
  angle: 135,
});
