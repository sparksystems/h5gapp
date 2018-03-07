var bw = window.innerWidth;
var bh = window.innerHeight;
var can = document.getElementById("can");
var ctx = can.getContext("2d");

function autoSize () {
  bw = window.innerWidth;
  bh = window.innerHeight;
  can.width = bw;
  can.height = bh;
  document.querySelector(".mark-text").innerHTML = bw + "&times;" + bh + " html5 game app";
  drawCanvas();
}
window.onresize = autoSize;
autoSize();

function drawCanvas () {
  var color = ['red', 'orange', 'purple', 'green', 'blue', 'lightgray', 'gray', 'black'];
  var k = -1;
  // 画回字形
  var xOff = 120;
  var yOff = 120;
  for (var i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.strokeStyle = color[++k % color.length];
    ctx.closePath();
    ctx.strokeRect(xOff - 10 * i, yOff - 10 * i, i * 20 + 10, i * 20 + 10);
  }

  // 画同心圆
  xOff = 360;
  yOff = 125;
  k = -1;
  for (i = 0; i < 11; i++) {
    ctx.beginPath();
    ctx.strokeStyle = color[++k % color.length];
    ctx.arc(xOff, yOff, i * 10, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.stroke();
  }
}
