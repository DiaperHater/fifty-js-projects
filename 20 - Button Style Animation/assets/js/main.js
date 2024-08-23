(function () {
  "use strict";

  if (typeof document === undefined) {
    // Not on a browser
    return
  }

  document.addEventListener("DOMContentLoaded", init)

  function init() {
    const button = document.querySelector('.button')
    button.addEventListener('click', animateButton)
  }

  function animateButton(event) {
    const button = document.querySelector('.button')
    const oldAnimationEl = button.querySelector('.button__animation')
    const newAnimationEl = document.createElement('span')

    oldAnimationEl.remove()

    newAnimationEl.classList.add('button__animation', '_animated')
    newAnimationEl.style.top = `${event.offsetY}px`
    newAnimationEl.style.left = `${event.offsetX}px`

    button.appendChild(newAnimationEl)
  }
})()