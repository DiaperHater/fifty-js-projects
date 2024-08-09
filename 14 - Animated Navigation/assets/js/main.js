(function () {
  "use strict";

  if (typeof document === undefined) {
    // Not on a browser
    return
  }

  document.addEventListener("DOMContentLoaded", init)

  function init() {
    const toggle = document.querySelector(".nav__toggle")
    toggle.addEventListener("click", toggleNav)
  }

  function toggleNav() {
    const nav = document.querySelector(".nav")
    nav.classList.toggle("_active")

    // Update nav
    const linksBox = document.querySelector(".nav__links-box")
    const isNavActive = nav.classList.contains("_active")
    if (isNavActive) {
      const links = document.querySelector(".nav__links")
      linksBox.style.width = `${links.clientWidth}px`
    } else {
      linksBox.style.width = "0px"
    }
  }
})()