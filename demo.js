var currentTranslation = -300;
var strip;

function init() {
  strip = document.getElementById('strip');
  strip.style.webkitTransition = '-webkit-transform 1200ms';

  setInterval(doIt, 2000);
}

function doIt() {
  strip.style.webkitTransform = 'translateX(' + currentTranslation + 'px)';
  currentTranslation -= 300;

  if (currentTranslation == -1200) {
    currentTranslation = 0;
  }
}

window.addEventListener('load', init);
