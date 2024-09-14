const messages = [
  'Hi my name is Rapatas Rapatan',
  'I do\'nt like you',
  'Sorry, all operators are offline',
  'Did you know that some lizzards are green',
  'Nice tits, babe! <i class="fas fa-lemon"></i> <i class="fas fa-lemon"></i>',
]

const btn = document.querySelector('.button')
btn.addEventListener('click', showNotification)

function showNotification() {

  const notification = document.createElement('div')
  notification.classList.add('notification-item')
  notification.innerHTML = randomNotification()

  const container = document.querySelector('.notifications')
  container.appendChild(notification)

  setTimeout(() => notification.remove(), 3000)
}

function randomNotification() {

  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex]
}