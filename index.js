var oStatic = document.getElementById("static-block");
var oMove = document.getElementById("moveable-block");
var oArea = document.getElementsByClassName("moveable-area")[0];

(function () {
  var dragging = false;
  var blockX;
  var blockY;
  var mouseX;
  var mouseY;
  var offsetX;
  var offsetY;

  oMove.onmousedown = down;
  document.onmousemove = move;
  document.onmouseup = up;

  function down(e) {
    dragging = true;
    blockX = oMove.offsetLeft;
    blockY = oMove.offsetTop;

    mouseX = e.pageX;
    mouseY = e.pageY;

    offsetX = mouseX - blockX;
    offsetY = mouseY - blockY;
  }

  function move(e) {
    if (dragging) {
      var movedX = e.pageX - offsetX;
      var movedY = e.pageY - offsetY;

      var maxWidth = oArea.clientWidth - oMove.offsetWidth;
      var maxHeight = oArea.clientHeight - oMove.offsetHeight;

      movedX = Math.min(Math.max(0, movedX), maxWidth);
      movedY = Math.min(Math.max(0, movedY), maxHeight);

      oMove.style.left = movedX + "px";
      oMove.style.top = movedY + "px";

    }
  }

  function up(e) {
    dragging = false;
  }
  
})();