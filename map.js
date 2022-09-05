function createMap() {
  // create map

  // 4 layers of block
  blocks.push(new Block(-800, 118, 1600, 32))

  blocks.push(new Block(randGrid(-50, 3), 118 - scale / 2 - scale / 2 - scale / 2, randGrid(5, 15), 24))
  blocks.push(new Block(randGrid(-3, 20), 118 - scale / 2 - scale / 2 - scale / 2, randGrid(5, 15), 24))

  blocks.push(new Block(randGrid(-50, 2), 118 - scale / 2 - scale / 2, randGrid(10, 30), 16))
  blocks.push(new Block(randGrid(-2, 10), 118 - scale / 2 - scale / 2, randGrid(10, 30), 16))


  blocks.push(new Block(randGrid(-50, 0), 118 - scale / 2, randGrid(15, 50), 8))
  blocks.push(new Block(randGrid(0, 5), 118 - scale / 2, randGrid(15, 50), 8))


}

function randGrid(min, max) {
  // min inclusve, max not
  return (Math.floor((Math.random() * (max - min) + min)) * 8);
}