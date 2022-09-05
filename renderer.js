function render() {

  camera.x = (player.x + player.size / (scale1 * 2) - c.width / (scale1 * 2))
  // set the camera's x to have player in middle

  ctx.clearRect(0, 0, c.width, c.height)

  // render blocks
  for (let b = 0; b < blocks.length; b++) {
    if (onCanv(blocks[b].x, blocks[b].y, blocks[b].width, blocks[b].height)) {
      ctx.drawImage(blockImage, mtcx(blocks[b].x), blocks[b].y, blocks[b].width, blocks[b].height)
    }
  }

  // render enemies
  for (let e = 0; e < enemies.length; e++) {
    if (onCanv(enemies[e].x, enemies[e].y, enemies[e].size, enemies[e].size)) {
      ctx.drawImage(enemies[e].image, mtcx(enemies[e].x), enemies[e].y, enemies[e].size, enemies[e].size)
    }
  }

  // render player
  ctx.drawImage(playerImage, ((camera.width / (scale1 * 2)) - player.size / 2), player.y, player.size, player.size);

  // gui
  // health bar

  ctx.fillStyle = "gray";
  ctx.beginPath();
  ctx.fillRect(4, 4, healthBarWidth, healthBarHeight);
  ctx.stroke();
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.fillRect(4, 4, (healthBarWidth / player.maxHealth) * player.health, healthBarHeight);
  ctx.stroke();


  if (false) {
    // draw box to middle of canvas for testing
    ctx.lineWidth = 1;
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.rect(c.width / (scale1 * 2), c.height / (scale1 * 2), 300, 300);
    ctx.stroke();
  }

}

function onCanv(x, y, width, height) {
  // if the element is inside the canvas
  if (x <= camera.x + camera.width &&
    x + width >= camera.x &&
    y <= camera.y + c.height &&
    y + height >= camera.y) {
    return (true)
  } else {
    return (false)
  }
}

function mtcx(x) {
  // map to canvas x
  return (x - camera.x);
}

function ctmx(x) {
  // canvas to map x
  // camera.x = canvas0,0 in map
  return (x + camera.x);
}