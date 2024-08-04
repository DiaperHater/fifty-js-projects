(function () {
  "use strict";
  if (typeof document === "undefined") {
    // Not on browser
    return;
  }

  document.addEventListener("DOMContentLoaded", init);

  function init() {

    window.addEventListener("keypress", event => updateView(event.key, event.code))
    createNewBlock("event.key", "")
    createNewBlock("event.code", "")
  }

  function updateView(key, code) {
    const blocksContainer = document.querySelector(".keycode__container")
    blocksContainer.innerHTML = ""

    createNewBlock("event.key", key)
    createNewBlock("event.code", code)
  }

  function createNewBlock(name, value) {
    const blocksContainer = document.querySelector(".keycode__container")
    const block = document.createElement("div")
    blocksContainer.appendChild(block)
    block.outerHTML = `
      <div class="keycode__block block-keycode">
        <div class="block-keycode__name">${name}</div>
        <div class="block-keycode__inner">
          <span class="block-keycode__value">${value}</span>
        </div>
      </div>
    `
  }
})()