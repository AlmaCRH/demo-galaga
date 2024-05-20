console.log("ola");

let board = document.getElementById("canvas");

let player = new Player(225, 750);
let enemy = new Enemy(255, 0);

function startGame() {
  player.insertPlayer();
  enemy.insertEnemy();
  timeMovePlayer = setInterval(() => player.move(), 5);
}

window.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "a":
      player.direction = -1;
      break;
    case "d":
      player.direction = 1;
      break;
  }
});

window.addEventListener("keyup", function (event) {
  player.direction = 0;
});

startGame();
