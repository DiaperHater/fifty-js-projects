(function () {

  const sides = document.querySelectorAll(".split-side")
  sides.forEach(side => {
    side.addEventListener("click", () => {
      document.querySelector(".split-side._active")?.classList.remove("_active")
      side.classList.add("_active")
    })
  })
})();