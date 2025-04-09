import { virtualSheet } from "twind/sheets";
import { setup, tw } from "twind";

const sheet = virtualSheet();
setup({ sheet });

function resolveClassToCSS(selector, className) {
  sheet.reset();

  const classStr = Array.isArray(className) ? className.join(" ") : className;
  tw(classStr);

  const rules = sheet.target;
  const declarationLines = [];

  for (const rule of rules) {
    const match = rule.match(/^\.(?:[\w:\-\[\]]+)\s*\{([^}]+)\}/);

    if (match) {
      const declarations = match[1].trim();

      const lines = declarations
        .split(/;/)
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
        .map((line) => line + ";");

      declarationLines.push(...lines);
    }
  }

  if (declarationLines.length === 0) return "";

  return `${selector} {\n  ${declarationLines.join("\n  ")}\n}`;
}

function twsx(structure, parent = "") {
  let css = "";

  for (const key in structure) {
    const value = structure[key];
    const selector = `${parent}${key}`.trim();

    if (Array.isArray(value)) {
      const [baseClass, nested] = value;
      css += resolveClassToCSS(selector, baseClass) + "\n\n";

      if (typeof nested === "object") {
        css += twsx(nested, selector + " ");
      }
    } else if (typeof value === "string") {
      css += resolveClassToCSS(selector, value) + "\n\n";
    } else if (typeof value === "object") {
      css += twsx(value, selector + " ");
    }
  }

  return css.trim();
}

export default twsx;
