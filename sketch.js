function setup() {
	var canvas = createCanvas(window.innerWidth, window.innerHeight);
	canvas.parent('canvas-wrap');
	smooth();
}

function draw() {
	background(0,0,0);

	var white_circle = new Circle(100,100,100);
	white_circle.display;
}

function Circle(canvas, r, g, b){
	var size;
	var r;
	var g;
	var b;
	var myAlpha;
	var speedX;
	var speedY;

	this.canvas = canvas;
	size = 100;

	Circle.prototype.display = function() {
		this.canvas.noStroke();
		this.canvas.fill(r, g, b);
		this.canvas.ellipse(50, 50, size, size);
	}
}
