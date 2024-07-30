(function () {

  const btn = document.querySelector(".search-widget__btn")
  const search = document.querySelector(".search-widget")
  const input = document.querySelector(".search-widget__input")

  btn.addEventListener("click", () => {
    search.classList.toggle("active")
    input.focus()
  })
})();