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

export default [
  { name: "slate", color: "146, 161, 182" },
  { name: "gray", color: "152, 159, 171" },
  { name: "zinc", color: "161, 161, 170" },
  { name: "neutral", color: "163, 163, 163" },
  { name: "stone", color: "168, 162, 158" },
  { name: "red", color: "248, 113, 113" },
  { name: "orange", color: "251, 146, 60" },
  { name: "amber", color: "251, 191, 36" },
  { name: "yellow", color: "250, 204, 21" },
  { name: "lime", color: "163, 230, 53" },
  { name: "green", color: "74, 222, 128" },
  { name: "emerald", color: "52, 211, 153" },
  { name: "teal", color: "45, 212, 191" },
  { name: "cyan", color: "34, 211, 238" },
  { name: "sky", color: "56, 189, 248" },
  { name: "blue", color: "96, 165, 250" },
  { name: "indigo", color: "129, 140, 248" },
  { name: "violet", color: "167, 139, 250" },
  { name: "purple", color: "192, 132, 252" },
  { name: "fuchsia", color: "232, 121, 249" },
  { name: "pink", color: "244, 114, 182" },
  { name: "rose", color: "251, 113, 133" },
].reduce((currentData, item) => {
  currentData[item.name] = generateStripedBackground({
    color1: `rgba(${item.color}, 0.3)`,
    color2: `rgba(${item.color}, 1)`,
    ratio: 80,
    angle: 135,
  });
  return currentData;
}, {});
