
var currentTranslation = 0;
var strip = null;
var pageX = 0;
var deltaX = 0;
var pressing = false;

function init() {
  strip = document.getElementById('strip');
  this.bindEvents();
}

function bindEvents() {
  strip.addEventListener('mousedown', this.dragStart);
  strip.addEventListener('mousemove', this.dragMove);
  strip.addEventListener('mouseup', this.dragEnd);
}

function dragStart(e) {
  e.preventDefault();

  pressing = true;
  pageX = e.pageX;
}

function dragMove(e) {
  e.preventDefault();

  if (!pressing) {
    return;
  }

  deltaX = e.pageX - pageX;

  strip.style.webkitTransition = '-webkit-transform 0s';
  strip.style.webkitTransform = 'translateX(' + (currentTranslation + deltaX) + 'px)';

}

function dragEnd(e) {
  e.preventDefault();
  pressing = false;

  strip.style.webkitTransition = '-webkit-transform 600ms';

  if (deltaX > 0) {
    currentTranslation += 300;
  } else if (deltaX < 0) {
    currentTranslation -= 300;
  }

  deltaX = 0;
  strip.style.webkitTransform = 'translateX(' + currentTranslation + 'px)';
}

window.addEventListener('load', init);
