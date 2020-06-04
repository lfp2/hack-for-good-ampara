const fs = require("fs");
const ejs = require("ejs");

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const template = fs.readFileSync("app.tpl.yaml").toString();
const content = ejs.render(template, process.env);

fs.writeFileSync("app.yaml", content);