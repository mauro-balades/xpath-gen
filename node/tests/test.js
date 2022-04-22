
let xpath = require("../dist/index.js").default;
let x = new xpath()

x.element("hello", {
  attributes: [{
    class: "my_class"
  }]
})