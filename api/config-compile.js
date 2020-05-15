const fs = require("fs");
const ejs = require("ejs");

const template = fs.readFileSync("app.tpl.yaml").toString();
const content = ejs.render(template, process.env);

fs.writeFileSync("app.yaml", content);