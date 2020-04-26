class Car {
  constructor() {
    this.x = 128;
    this.y = 370;
    this.img = new Image();
    this.img.src = "./images/car.png";
    this.img.onload = () => {
      this.draw();
    };
  }

  draw() {
    context.drawImage(this.img, this.x, this.y, 25, 50);
  }

  moveLeft() {
    if (this.x > 20) {
      this.x -= 5;
    }
  }

  moveRight() {
    if (this.x < 237) this.x += 5;
  }
}
