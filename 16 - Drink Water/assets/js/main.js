(function () {
  "use strict";

  if (typeof document === undefined) {
    // Not on a browser
    return
  }

  document.addEventListener("DOMContentLoaded", init)

  function init() {

    const cups = document.querySelectorAll(".app__cup")

    cups.forEach(cup => cup.addEventListener("click", updateCups))

    updateBottle()
  }

  function updateCups() {

    const clickedCup = this
    const isClickedCupChecked = clickedCup.classList.contains("_checked")
    const isClickedCupLastChecked = !clickedCup.nextElementSibling?.classList.contains("_checked")

    // If click on last checked cup
    if (isClickedCupChecked && isClickedCupLastChecked) {

      clickedCup.classList.remove("_checked")

      updateBottle()

      return
    }

    const cups = Array.from(document.querySelectorAll(".app__cup"))
    const checkedCups = cups.filter(c => cups.indexOf(c) <= cups.indexOf(clickedCup))
    const uncheckedCups = cups.filter(c => cups.indexOf(c) > cups.indexOf(clickedCup))

    checkedCups.forEach(cup => cup.classList.add("_checked"))
    uncheckedCups.forEach(cup => cup.classList.remove("_checked"))

    updateBottle()
  }

  function updateBottle() {

    const bottleLabel = document.querySelector(".app__bottle-label")
    const bottleLevel = document.querySelector(".app__bottle-level")
    const totalCupsCount = document.querySelectorAll(".app__cup").length
    const checkedCupsCount = document.querySelectorAll(".app__cup._checked").length

    bottleLabel.innerHTML = `Remained<br>${(totalCupsCount - checkedCupsCount) * 250 / 1000}L`
    bottleLevel.style.height = `${100 / totalCupsCount * checkedCupsCount}%`
  }
})()