let board = document.getElementById('canvas')
let screen = document.getElementById('start')
let button = document.getElementById('start-button')
//Player
let player = new Player(400, 550)
let timerMovePlayer

//Enemy
let enemyArray = []

let timerCreateEnemy

let bullet

function createEnemy() {
    let randomCoordX = Math.floor(Math.random() * 10) * 80
    let enemy = new Enemy(randomCoordX, 0) 
    enemy.insertEnemy()
    enemyArray.push(enemy)
}


function startGame() {
    player.insertPlayer()
    timerMovePlayer = setInterval(() => player.move(), 10)
    timerCreateEnemy = setInterval(() => createEnemy(), 1800)
}

//Key Listener
window.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'a':
            player.direction = -1
            break
        case 'd':
            player.direction = 1
            break
        case 'w':
            bullet = new Bullet(enemyArray)
            bullet.insertBullet() 
            break
    }
})

window.addEventListener('keyup', function (e) {
    player.direction = 0
})

button.addEventListener("click",() => {
    console.log("Press")
    board.style.display = "block"
    screen.style.display= "none"
    startGame()
})
