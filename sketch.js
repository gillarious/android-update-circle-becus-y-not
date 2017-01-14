function setup() {
	var canvas = createCanvas(window.innerWidth, window.innerHeight);
	canvas.parent('canvas-wrap');
	smooth();
}

function draw() {
	background(0,0,0);
	
}

function Circle(canvas, color){
	var size;
	var myRed;
	var myGreen;
	var myBlue;
	var myAlpha;
	var speedX;
	var speedY;

	this.canvas = canvas;
	this.x = x;
	this.y = y;
	size = this.canvas.random(15, 35);

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
		this.canvas.fill(myRed, myGreen, myBlue, myAlpha);
		this.canvas.ellipse(x, y, size, size);
	}
}
