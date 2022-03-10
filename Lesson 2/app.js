console.log("test....");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.moveTo(300,125);
ctx.lineTo(110,50);
ctx.moveTo(50,15);
ctx.lineTo(210,10);
ctx.moveTo(350,150);
ctx.lineTo(350,25);
ctx.strokeStyle = "purple";
ctx.lineWidth = 5;
ctx.stroke();

ctx.fillStyle = 'rgb(255,235 ,15 )';
ctx.fillRect(75,125,150,100);

ctx.strokeStyle = "green";
ctx.strokeRect(50,100,200,150);

ctx.clearRect(125, 150, 50, 50);