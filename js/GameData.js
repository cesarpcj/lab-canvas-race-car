class GameData {
  constructor() {
    this.stage = "playing";
    this.score = 0;
    this.drawScore();
  }

  drawScore() {
    context.font = "20px Arial";
    context.strokeStyle = "black";
    context.fillStyle = "black";
    console.log("draw ", this.score);
    context.fillText("Score: " + this.score, 38, 25);
  }

  addScore() {
    if (!this.score) this.score = 0;
    this.score += 1;
  }
}
