export default async function runJokes() {

  const button = document.querySelector('.jokes__button')
  const jokeBody = document.querySelector('.jokes__body')


  button.addEventListener('click', generateJoke)


  async function generateJoke() {

    try {

      const config = {
        headers: {
          "Accept": "application/json"
        }
      }
      const response = await fetch('https://icanhazdadjoke.com/', config)
      const json = await response.json()
      jokeBody.innerText = json.joke
    } catch (e) {
      jokeBody.innerText = 'Error!'
      console.error(e)
    }
  }
}
