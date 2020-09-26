/**
 * Container Generator
 */

const fs = require("fs");
const path = require("path");
const componentExists = require("../utils/componentExists");

function trimTemplateFile(template) {
  // Loads the template file and trims the whitespace and then returns the content as a string.
  return fs
    .readFileSync(path.join(__dirname, `./${template}`), "utf8")
    .replace(/\s*$/, "");
}

module.exports = {
  description: "Add a container component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Default",
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? "A component or container with this name already exists"
            : true;
        }

        return "The name is required";
      }
    }
  ],
  actions: () => {
    const actions = [
      {
        type: "add",
        path: "../../src/pages/{{properCase name}}/index.js",
        templateFile: "./container/index.js.hbs",
        abortOnFail: true
      }
    ];

    actions.push({
      type: "modify",
      path: "../../src/routes/index.js",
      pattern: /(\/\/ -- APPEND ROUTES HERE --)/gi,
      template: trimTemplateFile("routes.js.hbs")
    });

    actions.push({
      type: "prettify",
      path: "/pages/"
    });

    actions.push({
      type: "prettify-routes"
    });

    return actions;
  }
};
