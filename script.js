

// keypresses
onkeydown = onkeyup = function(e) {
	keyMap[e.code] = e.type == "keydown";
};

class Block {
	constructor(x, y, width, height) {
		this.x = x
		this.y = y
		this.width = width
		this.height = height
	}
}

function init() {

	hotbar(0)

	createMap()

	enemies.push(new Enemy(0, 0))

	hotbarImages()

	start()
}

init()

function start() {
	setInterval(function() {
		// update player
		player.update()

		// update enemies
		for (let e = 0; e < enemies.length; e++) {
			enemies[e].update(
			)
		}

		// render everything
		render()
	}, 50);
}

function hotbar(index) {
	// called when changing hotbar slots
	// change class name of active slot to do styling
	// show name of current item

	for (let i = 0; i < document.getElementById('hotbar').children.length; i++) {
		document.getElementById('hotbar').children[i].classList.remove('active')
	}

	document.getElementById('hotbar').children[index].classList.add('active')

	if (inventory[index].id == '') {
		document.getElementById('activeItem').innerHTML = '-'
	} else {
		document.getElementById('activeItem').innerHTML = items[inventory[index].id].name
	}
}

function hotbarImages() {
	// updates hotbar image
	btns = document.getElementById('hotbar').children
	for (let i = 0; i < btns.length; i++) {
		if (inventory[i].id != '') {
			btns[i].style.backgroundImage = 'url(' + items[inventory[i].id]['image'] + ")"
		}
	}
}