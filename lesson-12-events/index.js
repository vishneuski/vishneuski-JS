var images = document.getElementsByTagName('img');

for (var i = 0; i < images.length; i++) {

  images[i].style.position = 'absolute';
  images[i].style.left = images[i].offsetLeft + 'px';
  images[i].style.top = images[i].offsetTop + 'px';

  images[i].ondragstart = function () {
    return false;
  };

  images[i].addEventListener('mousedown', dragStart, false);

  function dragStart(EO) {
    var dragImage = EO.target;

    dragImage.style.cursor = 'pointer';
    dragImage.dragShiftX = EO.pageX - dragImage.offsetLeft;
    dragImage.dragShiftY = EO.pageY - dragImage.offsetTop;

    dragMove(EO);

    function dragMove(EO) {
      dragImage.style.zIndex = 1;
      dragImage.style.top = EO.pageY - dragImage.dragShiftY + 'px';
      dragImage.style.left = EO.pageX - dragImage.dragShiftX + 'px';
    }

    document.addEventListener('mousemove', dragMove, false);
    dragImage.addEventListener('mouseup', dragStop, false);

    function dragStop() {
      document.removeEventListener('mousemove', dragMove, false);
      dragImage = null;
    }
  }
}