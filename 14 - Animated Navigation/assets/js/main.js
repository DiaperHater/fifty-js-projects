(function () {
  "use strict";

  if (typeof document === undefined) {
    // Not on a browser
    return
  }

  document.addEventListener("DOMContentLoaded", init)

  const linksBox = document.querySelector(".nav__links-box")
  // linksBox.style.width = 0
  function init() {
    const toggle = document.querySelector(".nav__toggle")
    toggle.addEventListener("click", toggleNav)
  }

  function toggleNav() {
    const nav = document.querySelector(".nav")
    const links = document.querySelector(".nav__links")
    const linksBox = document.querySelector(".nav__links-box")

    nav.classList.toggle("_active")

    nav.classList.contains("_active") ? linksBox.style.width = links.clientWidth + "px" : linksBox.style.width = "0px"
  }
})()