export default async function runJokes() {

  const button = document.querySelector('.jokes__button')
  const jokeBody = document.querySelector('.jokes__body')


  button.addEventListener('click', buttonClickHandler)


  async function buttonClickHandler() {

    try {

      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          "Accept": "application/json"
        }
      })
      const json = await response.json()
      jokeBody.innerText = json.joke
    } catch (e) {
      jokeBody.innerText = 'Error!'
      console.error(e)
    }
  }
}
