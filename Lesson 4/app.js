var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = new Image();
img.src = "minecraft.png";
img.onload = function(){
	ctx.drawImage(img,600,50,100,200);
}
ctx.fillStyle = "sandybrown";
ctx.fillRect (0,380,800,150);
ctx.fillStyle = "midnightblue";
ctx.fillRect (0,0,800,380);