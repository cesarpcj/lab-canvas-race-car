class Background {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = "./images/road.png";
    this.img.onload = () => {
      this.draw();
    };
  }

  draw() {
    context.drawImage(this.img, this.x, this.y);
  }
}
