(function () {

  const root = document.querySelector(":root")
  const stepsCount = document.querySelectorAll(".steps__item").length
  let currentStep = document.querySelectorAll(".steps__item.active").length


  function nextStep() {
    const lastActiveItem = Array.from(document.querySelectorAll(".steps__item.active")).pop()
    const nextActive = lastActiveItem.nextElementSibling
    nextActive.classList.add("active")
    root.style.setProperty("--progress-percentage", `calc(100% / ${stepsCount - 1} * ${currentStep})`)
  }

  function prevStep() {
    const lastActiveItem = Array.from(document.querySelectorAll(".steps__item.active")).pop()
    lastActiveItem.classList.remove("active")
    currentStep = document.querySelectorAll(".steps__item.active").length
    currentStep == 1 ? root.style.setProperty("--progress-percentage", "0%") : root.style.setProperty("--progress-percentage", `calc( 100% / ${stepsCount - 1} * ${currentStep - 1})`)
  }

  function updateCurrentStepValue() {
    currentStep = document.querySelectorAll(".steps__item.active").length
  }

  function disableButton(btn) {
    btn.setAttribute("disabled", true)
  }

  function enableButton(btn) {
    btn.removeAttribute("disabled")
  }


  const nextBtn = document.querySelector(".steps__button--next")
  nextBtn.addEventListener("click", () => {

    if (currentStep < stepsCount) {
      nextStep()
      updateCurrentStepValue()
    }

    if (currentStep == stepsCount) {
      disableButton(nextBtn)
    }

    if (prevBtn.hasAttribute("disabled") && currentStep > 1) {
      enableButton(prevBtn)
    }
  })

  const prevBtn = document.querySelector(".steps__button--prev")
  prevBtn.addEventListener("click", () => {

    currentStep = document.querySelectorAll(".steps__item.active").length

    if (currentStep > 1) {
      prevStep()
    }

    if (currentStep == 1) {
      disableButton(prevBtn)
    }

    if (nextBtn.hasAttribute("disabled") && currentStep < stepsCount) {
      enableButton(nextBtn)
    }
  })

})();