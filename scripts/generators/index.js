/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const containerGenerator = require("./container/index.js");
const componentGenerator = require("./component/index.js");

module.exports = plop => {
  plop.setGenerator("container", containerGenerator);
  plop.setGenerator("component", componentGenerator);

  plop.addHelper("directory", comp => {
    try {
      fs.accessSync(path.join(__dirname, `../../src/pages/${comp}`), fs.F_OK);
      return `pages/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });

  plop.addHelper("curly", (object, open) => (open ? "{" : "}"));

  plop.setActionType("prettify", (answers, config) => {
    const folderPath = `${path.join(
      __dirname,
      "/../../src/",
      config.path,
      "**/*.js"
    )}`;
    exec(`npm run prettify -- "${folderPath}"`);
    return folderPath;
  });

  plop.setActionType("prettify-routes", () => {
    const folderPath = `${path.join(__dirname, "/../../src/routes/index.js")}`;
    exec(`npm run prettify -- "${folderPath}"`);
    return folderPath;
  });
};
