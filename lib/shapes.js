class Shape {
  constructor(color) {
    this.color = color; //validate color, string
  }
}
class Triangle extends Shape {
  constructor(color) {
    super(color);
  }
  render() {
    return `<path d="M 150,0 L 0,300 L 300,300 z" fill=${this.color} />`;
  }
}
module.exports = { Shape, Triangle };
