var c = [];

function setup() {
  createCanvas(800, 600);

  for (var i = 0; i < 10; i++) {
    c[i] = new Cell(width / 2, height / 2);
  }
}

function draw() {
  background(0);
  for (var i = 0; i < c.length; i++) {
    c[i].move();
    c[i].show();
  }
}
class Cell {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  move() {
    this.x += (int)(Math.random() * 5) - 2;
    this.y += (int)(Math.random() * 5) - 2;
    if (mouseX > this.x) {
      this.x += (int)(Math.random() * 7);
    } else if (mouseX < this.x) {
      this.x -= (int)(Math.random() * 7);
    }
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, 30, 30);
    fill(255, 0, 0);
    textSize(22);
    text("Hello", this.x, this.y);
  }
}
