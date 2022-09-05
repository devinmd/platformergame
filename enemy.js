// enemy class

class Enemy {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.xVelocity = 0
    this.yVelocity = 0
    this.speed = 0.8
    this.friction = 1
    this.maxHealth = 10
    this.maxSpeed = 6
    this.direction = false
    this.health = this.maxhealth
    this.size = scale
    this.blocksUnder = []
    this.groundLevel
    this.reach = 0
    this.damage = 5
		this.image = enemyImage
    this.lastAttack = 0
    this.attackSpeed = 1000
  }
  update() {
    if (player.x - this.reach > this.x + this.size) {
      // player is to the right
      if (this.xVelocity + this.speed <= this.maxSpeed) {
        this.xVelocity += this.speed
      }
    } else if (player.x + player.size + this.reach < this.x) {
      // player is to the left
      if (this.xVelocity - this.speed >= -this.maxSpeed) {
        this.xVelocity -= this.speed
      }
    } else {
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

    this.y += this.yVelocity
    this.x += this.xVelocity



    this.blocksUnder = []

    // checking for block below enemy
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i].x + blocks[i].width > this.x && blocks[i].x < this.x + this.size) {
        this.blocksUnder.push(blocks[i].y)
      }
    }
    if (this.y + this.size >= this.groundLevel) {
      this.y = this.groundLevel - this.size
      this.yVelocity = 0
    }
    if (isFinite(Math.min(...this.blocksUnder))) {
      this.groundLevel = Math.min(...this.blocksUnder)
      // set groundlevel to the highest block under enemy
    }

    if (this.blocksUnder.length == 0) {
      //no blocks under enemy, go to floor
      this.groundLevel = c.height
    }

    // gravity
    if (this.y + this.size < this.groundLevel) {
      this.yVelocity += 1
    }
    // not going below floor
    if (this.y + this.size > this.groundLevel) {
      this.y = this.groundLevel - this.size
      this.yVelocity = 0
    }

    let d = new Date()
    // attacking
    if (
      player.x <= this.x + this.size + this.reach &&
      player.x + player.size + this.reach >= this.x &&
      player.y <= this.y + this.size + this.reach &&
      player.y + player.size + this.reach >= this.y
    ) {
			this.image = enemyAttackImage
      if (d.getTime() >= this.lastAttack + this.attackSpeed) {
        // attack
        player.health -= this.damage;
        this.lastAttack = d.getTime();
      }
    }else{
			this.image =enemyImage
		}
  }
}