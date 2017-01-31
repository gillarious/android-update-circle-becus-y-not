function setup() {
	var canvas = createCanvas(window.innerWidth, window.innerHeight);
	canvas.parent('canvas-wrap');
	smooth();
}

function draw() {
	background(0,0,0);

	var white_circle;
	white_circle = new Circle(0,0,0);
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
	this.x = x;
	this.y = y;
	size = 100;

	Circle.prototype.move = function() {
		x += speedX;
		y += speedY;

	  	if (x > width) {
			x = width;
			speedX *= -1;
	    }
		if (y > height) {
			y = height;
			speedY *= -1;
		}
		if (x < 0) {
			x =0;
			speedX *= -1;
		}
		if (y < 0) {
			y = 0;
			speedY *= -1;
		}
	}

	Circle.prototype.display = function() {
		this.canvas.noStroke();
		this.canvas.fill(r, g, b);
		this.canvas.ellipse(50, 50, size, size);
	}
}
