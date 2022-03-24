var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");

var width = 600;
var height = 400;

var x, y, mx, my;

function innit (){
	x = 300;
	y = 200;
	mx = 3;
	my = 4;
	return setInterval(draw, 10);
}

function circle(x, y, r){
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 6.28);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "yellow";
    ctx.fill();
}

function clear(){
	ctx.clearRect(0, 0, width, height);
}

function draw(){
	clear();
	circle(x, y, 30);
	if (x + mx < 0 || x + mx > width) {
		mx = -mx;
	}
	if (y + my < 0 || y + my > height) {
		my = -my;
	}
	x += mx;
	y += my;
}

innit();