(function () {
  "use strict";

  if (typeof document === undefined) {
    // Not on a browser
    return
  }

  document.addEventListener("DOMContentLoaded", init)

  let dragFrom = null

  function init() {
    const frameList = document.querySelectorAll('.frames__item')
    frameList.forEach(frame => {
      frame.addEventListener('dragstart', dragStart)
      frame.addEventListener('dragend', dragEnd)
      frame.addEventListener('dragover', dragOver)
      frame.addEventListener('dragleave', dragLeave)
      frame.addEventListener('drop', drop)
    })
  }

  function dragStart(ev) {
    if (ev.target.localName === 'img') {
      // Start drag an image
      this.classList.add('_hold')
      dragFrom = this
      ev.target.style.opacity = '1'
    }
  }

  function dragEnd(ev) {
    if (ev.target.localName === 'img') {
      // End drag an image      
      this.classList.remove('_hold')
      dragFrom = null
      ev.target.style.opacity = '1'
    }
  }

  function dragOver(ev) {
    ev.preventDefault()

    if (this !== dragFrom) {
      // Not drag over itself
      this.classList.add('_drop-target')
    }
  }

  function drop(ev) {
    if (dragFrom && dragFrom !== this) {
      // Got source and not itself
      ev.target.append(dragFrom.firstElementChild)
      dragFrom.classList.remove('_hold')
    }

    // Clear higlight
    this.classList.remove('_drop-target')
  }

  function dragLeave(ev) {
    // Clear higlight
    this.classList.remove('_drop-target')
  }
})()