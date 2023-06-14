class Shape {
  constructor(color) {
    this.color = color ? color : "white";
  }
}
class Triangle extends Shape {
  constructor(color) {
    super(color);
  }
  render() {
    return `<path d="M 150,0 L 0,300 L 300,300 z" fill="${this.color}"/>`;
  }
}
class Square extends Shape {
  constructor(color) {
    super(color);
  }
  render() {
    return `<rect width="100" height="100" x="100" y = "50" fill = "${this.color}"/>`;
  }
}
class Circle extends Shape {
  constructor(color) {
    super(color);
  }
  render() {
    return `<circle cx="150" cy="100" r="60" fill="${this.color}"/>`;
  }
}
module.exports = { Shape, Triangle, Square, Circle };
