(function () {
  "use strict";

  if (typeof document === undefined) {
    // Not on a browser
    return
  }

  document.addEventListener("DOMContentLoaded", init)

  async function init() {
    const movies = await discoverMovies()
    updateCards(movies)
    const searchField = document.querySelector('.app__search')
    searchField.addEventListener('input', handleSearchInput)
  }

  async function handleSearchInput(event) {
    const searchField = event.target
    let movies
    if (searchField.value !== '') {
      // Has text
      movies = await searchMovies(searchField.value)
    } else {
      // Empty
      movies = await discoverMovies()
    }
    updateCards(movies)
  }

  async function discoverMovies() {
    const API_KEY = '6dcb5fe77157e898822a7931e02743d7'
    const API_URL = `https://api.themoviedb.org/3/discover/movie?` +
      `&language=en-US&page=1&sort_by=popularity.desc&api_key=${API_KEY}`
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: API_KEY
      }
    }
    try {
      const response = await fetch(API_URL, options)
      const json = await response.json()
      const results = await json.results
      return results
    } catch (error) {
      console.error(error)
    }
  }

  async function searchMovies(query) {
    const API_KEY = '6dcb5fe77157e898822a7931e02743d7'
    const API_URL = `https://api.themoviedb.org/3/search/movie?` +
      `query=${query}&language=en-US&page=1&sort_by=popularity.desc&api_key=${API_KEY}`
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: API_KEY
      }
    };
    try {
      const response = await fetch(API_URL, options)
      const json = await response.json()
      const results = await json.results
      return results
    } catch (error) {
      console.error(error);
    }
  }

  function updateCards(results) {
    const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
    let cards = results.map(itm => {
      return `
        <div class="app__card card">
          <img src="${IMG_PATH + itm.poster_path}" alt="${itm.original_title}" class="card__image">
          <h3 class="card__title">${itm.original_title}</h3>
          <span class="card__raiting ${itm.vote_average >= 5 ? '_good' : '_bad'}">${itm.vote_average.toFixed(2)}</span>
          <p class="card__description">${itm.overview}</p>
        </div>
      `
    })
    cards = cards.join('')
    const container = document.querySelector('.app__cards-container')
    container.innerHTML = cards
  }
})()