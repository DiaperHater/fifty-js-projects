(function () {

  const root = document.querySelector(":root")
  const next = document.querySelector(".steps__button--next")
  const prev = document.querySelector(".steps__button--prev")
  const steps = document.querySelectorAll(".steps__item")
  let currentActive = 1

  next.addEventListener("click", () => {
    currentActive++
    if (currentActive > steps.length) {
      currentActive = steps.length
    }

    update()
  })

  prev.addEventListener("click", () => {
    currentActive--
    if (currentActive < 1) {
      currentActive = 1
    }

    update()
  })

  function update() {
    steps.forEach((step, index) => {
      if (index < currentActive) {
        step.classList.add("active")
      } else {
        step.classList.remove("active")
      }
    })

    if (currentActive === steps.length) {
      next.disabled = true
    } else if (currentActive === 1) {
      prev.disabled = true
    } else {
      next.disabled = false
      prev.disabled = false
    }

    root.style.setProperty("--progress-percentage", `calc(100% / ${steps.length - 1} * ${currentActive - 1})`)
  }
})();