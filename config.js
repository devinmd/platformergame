

// canvas
var c = document.getElementById("canv")

var ctx = c.getContext("2d");
ctx.imageSmoothingEnabled = true

// your items / inventory / hotbar

var inventory = {
	0: {
		id: 'sword',
		count: '1',
	},
	1: {
		id: 'potion',
		count: '1',
	},
	2: {
		id: '',
		count: '',
	},
	3: {
		id: '',
		count: '',
	},
	4: {
		id: '',
		count: '',
	}
}

var items = {
	'sword': {
		'image': 'assets/sword.png',
		'name': 'Sword'
	},
	'potion': {
		'image': 'assets/potion.png',
		'name': 'Potion'
	}
}

// don't change
var scale = 16

// canvas sizing
c.style.width = '800px'
var scale1 = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.
c.width = c.width * scale1;
c.height = c.height * scale1;
ctx.scale(scale1, scale1);

// container div sizing
document.getElementById('container').style.width = c.style.width
document.getElementById('container').style.height = c.style.height


// other vars
var groundLevel
var keyMap = {}

var healthBarWidth = 60
var healthBarHeight = 6

var blocks = []
var enemies = []

// images
// player
let playerImage = new Image();
playerImage.src = 'assets/player.png';

// block
let blockImage = new Image();
blockImage.src = 'assets/block.png';

// enemy
let enemyImage = new Image();
enemyImage.src = 'assets/enemy.png';

// enemy attacking
let enemyAttackImage = new Image();
enemyAttackImage.src = 'assets/enemyAttack.png'

// camera
var camera = {
	x: 0,
	y: 0,
	width: c.width,
	height: c.height,
}