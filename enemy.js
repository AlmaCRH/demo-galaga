class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.sprite = document.createElement("div");
    this.speed = 1
  }

  removeEnemy() {
    board.removeChild(this.sprite)
    clearInterval(timeMoveEnemy)
}

  insertEnemy() {
    this.sprite.setAttribute("class", "enemy");
    this.sprite.style.top = this.y + "px";
    this.sprite.style.left = this.x + "px";
    this.sprite.style.width = this.width + "px";
    this.sprite.style.height = this.height + "px";
    board.appendChild(this.sprite);
  }

  colisionEnemy() { 
    let playerP2 = player.x + player.width
    let enemyP2 = enemy.x + enemy.width
  
    if (this.y + this.height >= player.y && this.x >= player.x && this.x <= playerP2 || this.y + this.height >= player.y && this.x + this.width >= player.x && this.x + this.width <= playerP2  ) {
      this.removeEnemy()
    }
    
  }

  move() {
    let nextY = this.y + this.speed 
    if (nextY <= 800 - this.height) {
      this.colisionEnemy()
    this.y = nextY
      this.sprite.style.top = this.y + "px";
    }
    else{ this.removeEnemy()}
}

}
