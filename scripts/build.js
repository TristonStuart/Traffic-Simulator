// Build the typescript source into the javascript file
const browserify = require("browserify");
const tsify = require("tsify");
const fs = require("fs");

browserify()
  .add("./app/src/main.ts")
  .plugin("tsify")
  .bundle()
  .pipe(fs.createWriteStream("./app/build/index.js"));