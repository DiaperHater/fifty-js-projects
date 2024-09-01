(function () {
  "use strict";

  const header = document.querySelector('.header')

  window.addEventListener('scroll', fixHeader)

  function fixHeader(e) {
    if (window.scrollY > header.offsetHeight) {
      header.classList.add('_active')
    } else {
      header.classList.remove('_active')
    }
  }
})()