(function () {
  "use strict";

  if (typeof document === undefined) {
    // Not on a browser
    return
  }

  document.addEventListener("DOMContentLoaded", init)

  let slides = [];

  function init() {
    slides = document.querySelectorAll('.app__slide')
    slides = [...slides]

    const nextBtn = document.querySelector('.app__button._next')
    nextBtn.addEventListener('click', nextSlide)

    const prevBtn = document.querySelector('.app__button._prev')
    prevBtn.addEventListener('click', prevSlide)
  }

  function nextSlide() {
    switchSlide(() => slides.push(slides.shift()))
  }

  function prevSlide() {
    switchSlide(() => slides.unshift(slides.pop()))
  }

  function switchSlide(switchFn) {
    clearActiveSlide()
    switchFn()
    slides[0].classList.add('_active')
    updateBgImage()
  }

  function clearActiveSlide() {
    const activeSlide = document.querySelector('.app__slide._active')
    activeSlide.classList.remove('_active')
  }

  function updateBgImage() {
    const bg = document.querySelector('.app__bg')
    bg.style.width = '120%'
    bg.style.transition = ''
    bg.src = slides[0].querySelector('img').src
    setTimeout(() => {
      bg.style.width = '100%'
      bg.style.transition = '.4s ease-in'
    }, 10)
  }
})()