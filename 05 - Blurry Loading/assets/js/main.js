(function () {

  const bg = document.querySelector(".bg")
  const loadingText = document.querySelector(".loading-text")
  let loadProgress = 0

  function loading() {
    loadProgress++

    if (loadProgress > 99) {
      clearInterval(interval)
    }

    loadingText.innerText = `${loadProgress}%`
    loadingText.style.opacity = `${1 - 1 / 100 * loadProgress}`
    bg.style.filter = `blur(${70 - 70 / 100 * loadProgress}px)`
  }

  const interval = setInterval(loading, 30)

})();