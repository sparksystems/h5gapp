var bw = window.innerWidth;
var bh = window.innerHeight;
var $mark = document.querySelector(".marker");
var $btns = document.querySelectorAll(".btn-gp .btn");
var can = document.getElementById("can");
var ctx = can.getContext("2d");
var colors = [
  "#eee",
  "#eee",
  "#eee",
  "#eee",
  "#eee",
  "#eee",
  "#eee",
  "#eee",
  "#eee",
  "#eee",
  "#eee",
  "#eee",
  "#eee",
  "#eee",
  "#eee",
  "#eee",
  "#eee",
  "#ddd",
  "#ddd",
  "#ddd",
  "#ddd",
  "#ddd",
  "#ccc",
  "#ccc",
  "#ccc",
  "#999",
  "#666",
  "#333",
  "#000"
];
var clen = colors.length;

/* 按钮动作 */
function btnsAction () {
  for (var i = 0; i < $btns.length; i++) {
    (function (index) {
      $btns[index].onclick = function () {
        for (var j = 0; j < $btns.length; j++) {
          $btns[j].setAttribute("class", (j === index) ? "btn active" : "btn");
        }
        act = this.getAttribute("part");
        console.log("选择：", act);
      };
    })(i);
  }
}

var k1 = k2 = -1;

/* 画回字形 */
function huizi() {
  var w = Math.sqrt(bw * bw + bh * bh) / (clen * 2 - 1);
  var x = (bw - w ) / 2,
    y = (bh - w) / 2;
  for (var i = 0; i < clen - 1; i++) {
    ctx.beginPath();
    ctx.strokeStyle = colors[++k1 % clen];
    ctx.closePath();
    ctx.strokeRect(x - w * i, y - w * i, i * 2 * w + w, i * 2 * w + w);
  }
  if (act !== "" && act !== "huizi") {
    console.log("回字型结束");
  } else {
    setTimeout(huizi, 220);
  }
}

/* 画同心圆 */
function tongxin() {
  var x = bw / 2, y = bh / 2, w = Math.sqrt(bw * bw + bh * bh) / (clen * 2 - 1);
  for (var i = 0; i < clen - 1; i++) {
    ctx.beginPath();
    ctx.strokeStyle = colors[++k2 % clen];
    ctx.arc(x, y, i * w, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.stroke();
  }
  if (act !== "" && act !== "tongxin") {
    console.log("同心圆结束");
  } else {
    setTimeout(tongxin, 120);
  }
}

var act = "";
/* 定时器 */
function drawCanvas() {
  switch (act) {
    case "tongxin":
      tongxin();
      break;
    case "huizi":
      huizi();
      break;
    case "tuya":
      // tuya();
      break;
    default:
      break;
  }
  act = "";
  setTimeout(drawCanvas, 4);
}

function autoSize() {
  bw = window.innerWidth;
  bh = window.innerHeight;
  can.width = bw;
  can.height = bh;
  $mark.innerHTML = " html5 web game app" + " (screen: " + bw + "&times;" + bh + ")";
}

window.onresize = autoSize;

autoSize();

/* 涂鸦函数 */
function tuya(){
  return;
  if (act == "tuya") {
    can.onmousedown = function(ev) {
      var e = ev || window.event;
      ctx.moveTo(e.clientX - can.offsetLeft, e.clientY - can.offsetTop);
      document.onmousemove = function(e) {
        var ev = e || window.eent;
        ctx.lineTo(ev.clientX - can.offsetLeft, ev.clientY - can.offsetTop);
        ctx.stroke();
      };
      document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  } else {
    can.onmousedown = null;
  }
}

var flag = false;
$mark.onclick = function () {
  flag = !flag;
  $mark.setAttribute("class", flag ? "marker active" : "marker")
  // tuya(flag);
};

drawCanvas();
btnsAction();
