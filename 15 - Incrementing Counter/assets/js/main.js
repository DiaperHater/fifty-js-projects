(function () {
  "use strict";

  if (typeof document === undefined) {
    // Not on a browser
    return
  }

  document.addEventListener("DOMContentLoaded", init)

  function init() {
    const counters = document.querySelectorAll(".counter__value")
    counters.forEach(runCounter)
  }

  function runCounter(counter) {
    const targetValue = counter.dataset.targetValue
    const clock = setInterval(() => counterIncrement(counter, targetValue, clock), 1);
  }

  function counterIncrement(counter, targetValue, clock) {
    let currentValue = Number(counter.innerText)

    currentValue += Math.ceil(targetValue / 200)
    counter.innerText = currentValue

    if (currentValue >= targetValue) {
      counter.innerText = targetValue
      clearInterval(clock)
    }
  }
})()