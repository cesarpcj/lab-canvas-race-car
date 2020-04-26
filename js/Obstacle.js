class Obstacle {
  constructor() {
    this.x = this.randomX();
    this.y = 0;
    this.hight = 50;
    this.width = 50;
  }

  draw() {
    context.fillStyle = "Brown";
    this.y = this.y + 3;
    context.fillRect(this.x, this.y, 130, 50);
  }

  randomX() {
    return Math.floor(Math.random() * 120);
  }
}
