(function () {
  "use strict";

  if (typeof document === undefined) {
    // Not on a browser
    return
  }

  document.addEventListener("DOMContentLoaded", init)

  function init() {
    const toggles = document.querySelectorAll(".faq-box__toggle")

    toggles.forEach(toggle => {
      toggle.addEventListener("click", () => toggle.parentElement.classList.toggle("_active"))
    })
  }
})()