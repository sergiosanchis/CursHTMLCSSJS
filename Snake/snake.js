var snake;
var fruit;
var FRUIT_SIZE = 10;
var SNAKE_SIZE = 10;
var WIDTH = 300;
var HEIGHT = 300;
var ctx;

function initialize() {
	ctx = document.getElementById("snake-screen").getContext("2d");
	updateFruit();
}

function updateFruit() {
	//random of 1 to max_canvas/snake_size + 1) x snake_size
	var fruitPositionX = (Math.floor(Math.random()*(WIDTH/SNAKE_SIZE)) + 1 ) * SNAKE_SIZE;
	var fruitPositionY = (Math.floor(Math.random()*(HEIGHT/SNAKE_SIZE)) + 1 ) * SNAKE_SIZE;
	ctx.beginPath();
	ctx.arc(fruitPositionX,fruitPositionY,FRUIT_SIZE,0, Math.PI*2, true);
	ctx.fillStyle = "red";
	ctx.fill();
}

function drawBall(x, y, color="black"){
	ctx.beginPath();
	ctx.arc(x,y,r,0, Math.PI*2, true);
	ctx.fillStyle = color;
	ctx.fill();
}

window.onload = initialize;