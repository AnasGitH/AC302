var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");

var width = 600;
var height = 400;

var x, y, mx, my;

var circleColor = "rgb(255, 0, 0)";

var x2, y2, mx2, my2;

var circleColor2 = "rgb(0, 255, 0)";

function innit (){
	x = 300;
	y = 200;
	mx = 3;
	my = 4;
	x2 = 300;
	y2 = 200;
	mx2 = 3;
	my2 = 4;
	return setInterval(draw, 10);
}

function circle(x, y, r, color){
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 6.28);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
}

function clear(){
	ctx.clearRect(0, 0, width, height);
}

function randomColor(){
	var r = Math.floor(Math.random()*255);
	var g = Math.floor(Math.random()*255);
	var b = Math.floor(Math.random()*255);
	return "rgb(" + r + "," + g + "," + b +")";
}

function draw(){
	clear();
	circle(x, y, 30, circleColor);
	if (x + mx < 0 || x + mx > width) {
		mx = -mx;
		circleColor = randomColor();
	}
	if (y + my < 0 || y + my > height) {
		my = -my;
		circleColor = randomColor();
	}
	x += mx;
	y += my;
		if (x2 + mx2 < 0 || x2 + mx2 > width) {
		mx2 = -mx2;
		circleColor2 = randomColor();
	}
	if (y2 + my2 < 0 || y2 + my2 > height) {
		my2 = -my2;
		circleColor2 = randomColor();
	}
	x2 += mx2;
	y2 += my2;
}

innit();