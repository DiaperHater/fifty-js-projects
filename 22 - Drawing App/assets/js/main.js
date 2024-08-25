(function () {
  "use strict";


  // Canvas
  const canvas = document.querySelector('.app__canvas')
  canvas.addEventListener('mousedown', canvasMouseDown)
  canvas.addEventListener('mouseup', canvasMouseUp)
  canvas.addEventListener('mousemove', canvasMouseMove)

  // Controls
  const decreaseBtn = document.querySelector('.app__button._decrease')
  decreaseBtn.addEventListener('click', decrease)

  const increaseBtn = document.querySelector('.app__button._increase')
  increaseBtn.addEventListener('click', increase)

  const palette = document.querySelector('.app__palette')
  palette.addEventListener('input', paletteInput)

  const clearBtn = document.querySelector('.app__button._clear')
  clearBtn.addEventListener('click', clear)

  // App State 
  const ctx = canvas.getContext('2d')

  let color = 'black'
  let size = 20
  let isPencilDown = false
  let x
  let y

  // Handlers
  function canvasMouseDown(ev) {

    isPencilDown = true
    x = ev.offsetX
    y = ev.offsetY
  }

  function canvasMouseUp(ev) {

    isPencilDown = false
    x = undefined
    y = undefined
  }

  function canvasMouseMove(ev) {

    if (isPencilDown) {

      const x2 = ev.offsetX
      const y2 = ev.offsetY

      drawCircle(x2, y2)
      drawLine(x, y, x2, y2)

      x = ev.offsetX
      y = ev.offsetY
    }
  }

  function decrease(ev) {

    size = size - 5

    if (size < 5) {
      size = 5
    }

    document.querySelector('.app__size-display').innerText = size
  }

  function increase(ev) {

    size = size + 5

    if (size > 40) {
      size = 40
    }

    document.querySelector('.app__size-display').innerText = size
  }

  function paletteInput(ev) {

    color = this.value
  }

  function clear(ev) {

    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  // Utils
  function drawCircle(x, y) {

    ctx.beginPath()
    ctx.arc(x, y, size / 2, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
  }

  function drawLine(x1, y1, x2, y2) {

    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size
    ctx.stroke()
  }

})()