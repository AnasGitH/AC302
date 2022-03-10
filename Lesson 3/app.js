var c = document.getElementById("myCanvas");
var cpx = c.getContext("2d");

cpx.beginPath();
cpx.arc(150,150,120,0,3.14);
cpx.closePath();
cpx.stroke();
cpx.fillStyle = "purple";
cpx.fill();

var c1 = document.getElementById("myCanvas1");
var cpx1 = c1.getContext("2d");

cpx1.beginPath();
cpx1.strokeStyle = "lime";
cpx1.moveTo(150,25);
cpx1.lineTo(225,150);
cpx1.lineTo(75,150);
cpx1.closePath();
cpx1.stroke();
cpx1.fillStyle = "green";
cpx1.fill();