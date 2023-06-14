const { Shape, Triangle, Square, Circle } = require("./shapes");

describe("Shape", () => {
  describe("Constructor", () => {
    it("Given a string, store it in a property called color.", () => {
      const testInput = "black";
      const shape = new Shape(testInput);
      expect(shape.color).toEqual(testInput);
    });
  });
  describe("Constructor", () => {
    it("Given string passed to the constructor, assert default string.", () => {
      const expectedOutput = "white";
      const shape = new Shape();
      expect(shape.color).toEqual(expectedOutput);
    });
  });
});

describe("Triangle", () => {
  describe("Constructor", () => {
    it("Given a string, store it in a property called color.", () => {
      const testInput = "white";
      const triangle = new Triangle(testInput);
      expect(triangle.color).toEqual(testInput);
    });
  });
  describe("render", () => {
    it("Given an initial color, when render, return svg for a triangle", () => {
      const testColor = "white";
      const triangle = new Triangle(testColor);
      expect(triangle.render()).toEqual(
        '<path d="M 150,0 L 0,300 L 300,300 z" fill="white"/>'
      );
    });
  });
});

describe("Square", () => {
  describe("Constructor", () => {
    it("Given a string, store it in a property called color.", () => {
      const testInput = "white";
      const square = new Square(testInput);
      expect(square.color).toEqual(testInput);
    });
  });
  describe("render", () => {
    it("Given an initial color, when render, return svg for a triangle", () => {
      const testColor = "white";
      const square = new Square(testColor);
      expect(square.render()).toEqual(
        '<rect width="100" height="100" x="100" y = "50" fill = "white"/>'
      );
    });
  });
});

describe("Circle", () => {
  describe("Constructor", () => {
    it("Given a string, store it in a property called color.", () => {
      const testInput = "white";
      const circle = new Circle(testInput);
      expect(circle.color).toEqual(testInput);
    });
  });
  describe("render", () => {
    it("Given an initial color, when render, return svg for a triangle", () => {
      const testColor = "white";
      const circle = new Circle(testColor);
      expect(circle.render()).toEqual(
        '<circle cx="150" cy="100" r="60" fill="white"/>'
      );
    });
  });
});
