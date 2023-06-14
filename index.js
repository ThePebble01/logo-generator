const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require("./lib/shapes");
var svgTemplate = `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
  -=shape=-
  -=text=-
  </svg>`;
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message:
          "What text do you want for your logo? Enter up to 3 characters.",
        name: "logoText",
        validate: (response) => {
          return response.length == 3
            ? true
            : "The logo text must be 3 characters!";
        },
      },
      {
        type: "input",
        message: "What color should the text be?",
        name: "logoTextColor",
      },
      {
        type: "list",
        message: "Select a shape to use for your logo:",
        choices: ["Square", "Triangle", "Circle"],
        name: "logoShape",
      },
      {
        type: "input",
        message: "What color do you want your shape to be?",
        name: "logoShapeColor",
      },
    ])
    .then(handleLogoPrompts)
    .catch((error) => {
      console.log("A problem occurred!");
      console.error(error);
    });
}
function handleLogoPrompts(response) {
  const svgTemplateWithImage = svgTemplate.replace(
    "-=shape=-",
    returnShapeSVG(response.logoShape, response.logoShapeColor)
  );
  const svgFullContent = svgTemplateWithImage.replace(
    "-=text=-",
    returnTextSVG(response.logoText, response.logoTextColor)
  );
  fs.writeFile("logo.svg", svgFullContent, logSVGCreationResult);
}
function returnShapeSVG(logoShape, logoShapeColor) {
  var shapeSVGResult = "";
  switch (logoShape) {
    case "Square":
      var shape = new Square(logoShapeColor);
      shapeSVGResult = shape.render();
      break;
    case "Triangle":
      var shape = new Triangle(logoShapeColor);
      shapeSVGResult = shape.render();
      break;
    case "Circle":
      var shape = new Circle(logoShapeColor);
      shapeSVGResult = shape.render();
      break;
    default:
      /*A default value for shapeSVGResult is not assigned.
      The responses from this prompt were collected using 
      a list input, so only these values are expected AND 
      must be selected.*/
      break;
  }
  return shapeSVGResult;
}
function logSVGCreationResult() {
  console.log("Generated logo.svg");
}
function returnTextSVG(logoText, logoTextColor) {
  if (!logoTextColor) logoTextColor = "black";
  return `<text x="140" y="100" fill="${logoTextColor}">${logoText}</text>`;
}
init();
