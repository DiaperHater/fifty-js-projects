(function () {
  "use strict";

  if (typeof document === undefined) {
    // Not on a browser
    return
  }

  document.addEventListener("DOMContentLoaded", init)

  function init() {
    initThemeSwitching()
    initAnalogClock()
    initDigitalClock()
  }

  function initThemeSwitching() {
    const themeSwitchButton = document.querySelector('.theme-switch-btn')
    themeSwitchButton.addEventListener('click', switchTheme)
  }

  function switchTheme() {
    const theme = document.querySelector('.theme')
    theme.classList.toggle('_dark')
  }

  function initAnalogClock() {
    setInterval(() => updateAnalogClock(), 1000);
  }

  function updateAnalogClock() {
    const date = new Date()
    setAnalogClockHours(date.getHours())
    setAnalogClockMinnutes(date.getMinutes())
    setAnalogClockSeconds(date.getSeconds())
  }

  function setAnalogClockHours(h) {
    const arrow = document.querySelector('.analog-clock__arrow._hour')
    arrow.style.rotate = `${360 / 12 * h}deg`
  }

  function setAnalogClockMinnutes(m) {
    const arrow = document.querySelector('.analog-clock__arrow._minnute')
    arrow.style.rotate = `${360 / 60 * m}deg`
  }

  function setAnalogClockSeconds(s) {
    const arrow = document.querySelector('.analog-clock__arrow._second')
    arrow.style.rotate = `${360 / 60 * s}deg`
  }

  function initDigitalClock() {
    setInterval(() => updateDigitalClock(), 1000);
  }

  function updateDigitalClock() {
    const date = new Date()

    const timeDisplay = document.querySelector('.digital-clock__time')
    const h = String(date.getHours()).replace(/^(\d)$/, '0$1')
    const m = String(date.getMinutes()).replace(/^(\d)$/, '0$1')
    timeDisplay.innerText = `${h}:${m}`

    const callendarDisplay = document.querySelector('.digital-clock__callendar')
    const month = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ][date.getMonth()]
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thuesday',
      'Friday',
      'Saturday'
    ][date.getDay()]
    const monthday = date.getDate()
    callendarDisplay.innerHTML = `
      <span class="digital-clock__weekday">${month}</span>
      <span class="digital-clock__month">${weekday}</span>
      <span class="digital-clock__date">${monthday}</span>
    `
  }
})()