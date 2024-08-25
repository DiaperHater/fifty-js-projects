(function () {
  "use strict";

  const data = {
    image: './assets/images/pic1.png',
    title: 'Hello world',
    text: 'Mr Jenkins is friquent clinet of our company, what makes him an outstanding candidate for this experemnt',
    ava: './assets/images/pic2.png',
    personName: 'John Doe',
    personPosition: 'CEO of Adidas'
  }

  setTimeout(() => {

    const cardImage = document.querySelector('.card__img')
    cardImage.src = data.image
    cardImage.classList.remove('_loading')

    const cardTitle = document.querySelector('.card__title')
    cardTitle.textContent = data.title
    cardTitle.classList.remove('_loading')

    const cardText = document.querySelector('.card__text')
    cardText.textContent = data.text
    cardText.classList.remove('_loading')

    const cardAva = document.querySelector('.card__ava')
    cardAva.src = data.ava
    cardAva.classList.remove('_loading')

    const cardPersonName = document.querySelector('.card__person-name')
    cardPersonName.textContent = data.personName
    cardPersonName.classList.remove('_loading')

    const cardPersonPosition = document.querySelector('.card__person-position')
    cardPersonPosition.textContent = data.personPosition
    cardPersonPosition.classList.remove('_loading')
  }, 2000)
})()