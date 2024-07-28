(function () {

  const stepsCount = document.querySelectorAll(".steps__item").length
  let currentStep = document.querySelectorAll(".steps__item.active").length
  const prevBtn = document.querySelector(".steps__button--prev")
  const nextBtn = document.querySelector(".steps__button--next")
  const progressBar = document.querySelector(".steps__progress")
  const root = document.querySelector(":root")
  const progressPersantage = getComputedStyle(root).getPropertyValue("--progress-percentage")

  console.log(progressPersantage);

  nextBtn.addEventListener("click", () => {

    currentStep = document.querySelectorAll(".steps__item.active").length
    if (currentStep < stepsCount) {

      const lastActiveItem = Array.from(document.querySelectorAll(".steps__item.active")).pop()
      const nextActive = lastActiveItem.nextElementSibling
      nextActive.classList.add("active")

      root.style.setProperty("--progress-percentage", `calc(${100 / stepsCount * currentStep}% + ${24 * currentStep}px)`)
    }

    if (currentStep == stepsCount - 1) {

      nextBtn.setAttribute("disabled", true)
    }

    if (currentStep == 1) {

      prevBtn.removeAttribute("disabled")
    }
  })

  prevBtn.addEventListener("click", () => {

    currentStep = document.querySelectorAll(".steps__item.active").length

    if (currentStep > 1) {

      const lastActiveItem = Array.from(document.querySelectorAll(".steps__item.active")).pop()
      lastActiveItem.classList.remove("active")

      currentStep = document.querySelectorAll(".steps__item.active").length

      currentStep == 1 ? root.style.setProperty("--progress-percentage", "0%") : root.style.setProperty("--progress-percentage", `calc( 100% / ${stepsCount - 1} * ${currentStep - 1})`)
    }

    if (currentStep == 1) {

      prevBtn.setAttribute("disabled", true)
    }

    if (currentStep < stepsCount && nextBtn.hasAttribute("disabled")) {

      nextBtn.removeAttribute("disabled")
    }
  })

})();