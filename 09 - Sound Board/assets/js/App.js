export default class App {
  run() {

    const sounds = document.querySelectorAll('.sound-board__sound')
    const buttons = document.querySelector('.sound-board__buttons')

    sounds.forEach(sound => {

      const button = document.createElement('button')
      button.classList.add('sound-board__button')
      button.innerText = sound.dataset.name
      buttons.appendChild(button)

      button.addEventListener('click', () => {
        stopSounds()
        sound.play()
      })
    })

    function stopSounds() {
      sounds.forEach(el => {
        el.pause()
        el.currentTime = 0
      })
    }
  }
}