const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle } = require("./lib/shapes");
function init() {
  var svgTemplate = `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
  -=shape=-
  -=text=-
  </svg>`;
  // -=text=-prompts, calling supporting f() to build svg...
  var myT = new Triangle(100, 100, "black");
  var svgTriangle = myT.render();
  const svgImage = svgTemplate.replace("-=shape=-", svgTriangle);
  const svgContent = svgImage.replace("-=text=-", generateSVGText("PAIN"));
  fs.writeFile("logo.svg", svgContent, logSVGCreationResult);
}
function logSVGCreationResult(response) {
  console.log(response);
}
function generateSVGText(text) {
  return `<text x="150" y="100">${text}</text>`;
}
init();
