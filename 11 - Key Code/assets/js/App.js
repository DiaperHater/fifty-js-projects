export default class App {

  constructor() {

    this.container = document.querySelector('.keycode__container')
  }

  run() {

    window.addEventListener('keypress', event => this.#updateView(event.key, event.code))
    this.#createNewBlock('event.key', '')
    this.#createNewBlock('event.code', '')
  }

  #updateView(key, code) {

    this.container.innerHTML = ""
    this.#createNewBlock('event.key', key)
    this.#createNewBlock('event.code', code)
  }

  #createNewBlock(name, value) {

    const block = document.createElement('div')
    this.container.appendChild(block)
    block.outerHTML = `
      <div class="keycode__block block-keycode">
        <div class="block-keycode__name">${name}</div>
        <div class="block-keycode__inner">
          <span class="block-keycode__value">${value}</span>
        </div>
      </div>
    `
  }
}