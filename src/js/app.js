var bw = window.innerWidth;
var bh = window.innerHeight;
var $info = document.querySelector(".debug .info");
var $mark = document.querySelector(".debug .mark");
var can = document.querySelector("#can");
var ctx = can.getContext("2d");

console.log($info, $mark);

function autoSize() {
  bw = window.innerWidth;
  bh = window.innerHeight;
  can.width = bw;
  can.height = bh;
  $mark.innerHTML = "canvas &lt;" + bw + "&times;" + bh + "&gt; spark systems 2018";
}

window.onresize = autoSize;
autoSize();
