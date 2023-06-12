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
    return `<polygon points="150, 20 244, 182 56, 182" fill=${this.color} />`;
  }
}
module.exports = { Triangle };
