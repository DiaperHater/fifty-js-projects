(function () {

  const labels = document.querySelectorAll(".login__label")
  labels.forEach((label) => {

    label.innerHTML = label.innerText
      .split("")
      .map((char, idx) => `<span style="transition-delay: ${50 * idx}ms;">${char}</span>`)
      .join("")
  })
})();