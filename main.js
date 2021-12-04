canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
var LastPositionx;
var LastPositiony;
color="blue";
if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.bodystyle.overflow="hidden";
console.log("mobile");
}
canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e){
    LastPositionx=e.touches[0].clientX-canvas.offsetLeft;
    LastPositiony=e.touches[0].clientY-canvas.offsetTop;
    document.body.style.overflow="hidden";console.log("touchstart");
}
canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e){
    currentpositionX=e.touches[0].clientX-canvas.offsetLeft;
    currentpositionY=e.touches[0].clientY-canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.moveTo(LastPositionx,LastPositiony);
    ctx.lineTo(currentpositionX,currentpositionY);
    ctx.stroke();

    LastPositiony=currentpositionY;
    LastPositionx=currentpositionX;
}