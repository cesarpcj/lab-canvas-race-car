const $canvas = document.getElementById("canvas");
const context = $canvas.getContext("2d");

window.onload = () => {
  const background = new Background(0, 0);
  const gameData = new GameData();
  const car = new Car();

  background.draw();

  car.draw();
  const obstacles = [];

  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  window.addEventListener("keydown", (event) => {
    switch (event.keyCode) {
      case 37:
        event.preventDefault();
        car.moveLeft();
        break;
      case 39:
        event.preventDefault();
        car.moveRight();
        break;
    }
  });

  function update() {
    if (gameData.stage === "playing") {
      context.clearRect(0, 0, 500, 700);
      background.draw();
      car.draw();

      drawObstacles();
      gameData.drawScore();
      setTimeout(update, 30);
    }
  }

  function updateScore() {
    if (gameData.stage === "playing") {
      gameData.addScore();
      setTimeout(updateScore, 1000);
    }
  }

  function createObstacle() {
    obstacles.push(new Obstacle());
  }

  function drawObstacles() {
    for (let obs of obstacles) {
      obs.draw();
    }
  }

  function startGame() {
    setTimeout(() => {
      gameData.stage = "GameOver";
    }, 20000);

    setInterval(createObstacle, 3000);
    updateScore();
    update();
  }
};
