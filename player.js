class Player {
    constructor(x,y,) {
        this.x = x
        this.y = y
        this.width = 50
        this.height = 50
        this.sprite = document.createElement('div')
        this.direction = null
        this.speed = 5
    }

    insertPlayer() {
        this.sprite.setAttribute('id', 'player')
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        this.sprite.style.width = this.width + 'px'
        this.sprite.style.height = this.height + 'px'
        board.appendChild(this.sprite)
    }

    move() {
      let nextX =  this.x + this.speed * this.direction
        if (nextX <= 800 - this.width && nextX >= 0) {
            this.x = nextX
            this.sprite.style.left = this.x + 'px'   
        }
   }
}