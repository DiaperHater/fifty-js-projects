(function () {

  const boxes = document.querySelectorAll(".box")

  window.addEventListener("scroll", () => {
    const showLine = window.innerHeight * 0.8

    boxes.forEach(box => {
      if (box.getBoundingClientRect().top < showLine) {
        box.classList.remove("box_hidden")
      } else {
        box.classList.add("box_hidden")
      }
    })
  })
})();