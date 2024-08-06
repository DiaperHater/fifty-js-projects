(function () {
  "use strict";

  if (typeof document === undefined) {
    // Not on a browser
    return
  }

  document.addEventListener("DOMContentLoaded", init)

  function init() {
    const input = document.querySelector(".choicepicker__input")
    input.focus()
    input.addEventListener("input", processInput)
  }

  function processInput(event) {
    if (event.data === null) {
      // 'Enter' key hit
      clearInputField()
      startRandomizer()
      return
    }

    const input = document.querySelector(".choicepicker__input")
    const text = input.value

    const textChunks = text.split(",").filter(itm => itm.length)
    const htmlChunks = textChunks.map(text => `<div class="choicepicker__result-item">${text}</div>`)

    const container = document.querySelector(".choicepicker__results")
    container.innerHTML = htmlChunks.join("")
  }

  function clearInputField() {
    const input = document.querySelector(".choicepicker__input")
    input.value = ""
  }

  function startRandomizer() {
    let items = document.querySelectorAll(".choicepicker__result-item")

    for (let n = 0; n < 20; n++) {
      setTimeout(() => {
        document.querySelector(".choicepicker__result-item._active")?.classList.remove("_active")
        const randomIdx = getRandomInt(items.length)
        items[randomIdx].classList.add("_active")
      }, 200 * n)
    }
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
})()