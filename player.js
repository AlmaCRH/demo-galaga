class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.sprite = document.createElement("div");
  }

  insertPlayer() {
    this.sprite.setAttribute("id", "player");
    this.sprite.style.top = this.y + "px";
    this.sprite.style.left = this.x + "px";
    this.sprite.style.width = this.width + "px";
    this.sprite.style.height = this.height + "px";
    board.appendChild(this.sprite);
  }
}
