// player object

var player = {
  'x': 0,
  'y': 0,
  'xVelocity': 0,
  'yVelocity': 0,
  'speed': 1,
  'friction': 2,
  'maxSpeed': 8,
  'jumping': false,
  'jumpPower': 7,
  'size': scale,
  'direction': false, // true = right, false = left
  'maxHealth': 100,
  'health': 100,
  'update': function () {
    // movement
    if (keyMap['KeyW']) {
      // jumping
      if (this.y + this.size >= groundLevel) {
        // if is on the ground
        this.jumping = true
        this.yVelocity -= this.jumpPower
      }
    }
    if (keyMap['KeyA']) {
      // left
      this.xVelocity -= this.speed
      if (this.xVelocity < -this.maxSpeed) {
        this.xVelocity = -this.maxSpeed
      }
    }
    if (keyMap['KeyD']) {
      // right
      this.xVelocity += this.speed
      if (this.xVelocity > this.maxSpeed) {
        this.xVelocity = this.maxSpeed
      }
    }

    // number keys
    if (keyMap['Digit1']) {
      hotbar(0)
    }
    if (keyMap['Digit2']) {
      hotbar(1)
    } if (keyMap['Digit3']) {
      hotbar(2)
    } if (keyMap['Digit4']) {
      hotbar(3)
    } if (keyMap['Digit5']) {
      hotbar(4)
    }
    if (!(keyMap['KeyA'] || keyMap['KeyD']) || this.xVelocity > 0 && keyMap['KeyA'] || this.xVelocity < 0 && keyMap['KeyD']) {
      // if not on A or D
      // OR
      // player is moving a direction and you click the opposite direction
      // do friction
      if (this.xVelocity > 0) {
        this.xVelocity -= this.friction
      }
      if (this.xVelocity < 0) {
        this.xVelocity += this.friction;
      }
      if ((this.xVelocity < this.friction && this.xVelocity > 0) || (this.xVelocity > -this.friction && this.xVelocity < 0)) {
        // xvel between 0 and friction
        // xvel between -friction and 0
        this.xVelocity = 0;
      }
    }

    // do velocity 
    this.x += this.xVelocity;
    this.y += this.yVelocity

    let blocksUnderPlayer = []

    // checking for block below the player
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i].x + blocks[i].width > this.x && blocks[i].x < this.x + this.size) {
        blocksUnderPlayer.push(blocks[i].y)
      }
    }

    if (this.y + this.size >= groundLevel) {
      this.y = groundLevel - this.size
      this.yVelocity = 0
    }
    if (isFinite(Math.min(...blocksUnderPlayer))) {
      groundLevel = Math.min(...blocksUnderPlayer)
      // set groundlevel to the highest block under player
    }

    if (blocksUnderPlayer.length == 0) {
      //no blocks under player, go to floor
      groundLevel = c.height
    }

    // jumping & gravity
    if (this.jumping == true) {
      // jumping
      this.yVelocity += 1
      if (this.yVelocity > 0) {
        // top of jump
        // let gravity bring player down
        this.jumping = false
      }
    } else {
      // gravity
      if (this.y + this.size < groundLevel) {
        this.yVelocity += 1
      }
    }
    // not going below floor
    if (this.y + this.size > groundLevel) {
      this.y = groundLevel - this.size
      this.yVelocity = 0
    }
  }
}