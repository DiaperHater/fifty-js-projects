
const sliderLeft = document.querySelector('.slider__left .slider__slides-container')
const sliderRigth = document.querySelector('.slider__right .slider__slides-container')
const slidesCount = sliderLeft.querySelectorAll('.slider__slide').length
const btnUp = document.querySelector('.slider__btn._up')
const btnDown = document.querySelector('.slider__btn._down')

let currentIndex = 0

sliderRigth.style.translate = `0 -${100 / slidesCount * (slidesCount - 1)}%`

btnDown.addEventListener('click', prevSlide)
btnUp.addEventListener('click', nextSlide)

function nextSlide() {
  currentIndex++
  if (currentIndex > slidesCount - 1) {
    currentIndex = 0
  }
  updateSlides()
}

function prevSlide() {
  currentIndex--
  if (currentIndex < 0) {
    currentIndex = slidesCount - 1
  }
  updateSlides()
}

function updateSlides() {
  sliderLeft.style.translate = `0 -${100 / slidesCount * currentIndex}%`
  sliderRigth.style.translate = `0 -${100 / slidesCount * (slidesCount - currentIndex - 1)}%`
}