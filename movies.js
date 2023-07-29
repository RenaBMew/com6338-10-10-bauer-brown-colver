const movieDiv = document.getElementById('searchResults')
const form = document.querySelector('form')
const userInput = document.getElementById('movie-search')
const amazonSearchbBtn = document.getElementById('amazon-search')
const youtubeSearchbBtn = document.getElementById('youtube-search')

function enableAmazonYouTube() {
  amazonSearchbBtn.disabled = false
  youtubeSearchbBtn.disabled = false
}

function disableAmazonYouTube() {
  amazonSearchbBtn.disabled = true
  youtubeSearchbBtn.disabled = true
}

form.onsubmit = async function findMovie(e) {
  e.preventDefault()
  try {
    const movieName = this.search.value.trim()
    if (!movieName) {
      movieDiv.innerHTML = 'Please enter a Movie Title.'
      return
    }
    userInput.value = ''
    localStorage.setItem('movieName', movieName)
    const res = await fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=6c6b5196&plot=full`)
    const movieData = await res.json()
    if (movieData.Error) {
      throw new Error(movieData.Error)
    }
    console.log(movieData)
    renderMovie(movieData)
    enableAmazonYouTube()
  } catch (err) {
    console.log(err)
    movieDiv.innerHTML = ''
    const error = document.createElement('h3')
    movieDiv.appendChild(error)
    error.textContent = "Invalid Movie"
    disableAmazonYouTube()
  }
}

function searchAmazon() {
  const savedMovieName = localStorage.getItem('movieName')
  if (savedMovieName) {
    window.open(`https://www.amazon.com/s?k=${savedMovieName}+movie+bluray`)
  } else {
    console.log('No Movie Selected')
    movieDiv.innerHTML = 'Search for a Movie First!'
  }
  enableAmazonYouTube()
}

function searchYouTube() {
  const savedMovieName = localStorage.getItem('movieName')
  if (savedMovieName) {
    window.open(`https://www.youtube.com/results?search_query=${savedMovieName}+movie+official+trailer`)
  } else {
    console.log('No Movie Selected')
    movieDiv.innerHTML = 'Search for a Movie First!'
  }
  enableAmazonYouTube()
}

const renderMovie = ({
  Actors,
  Awards,
  Director,
  Genre,
  Plot,
  Poster,
  Rated,
  Runtime,
  Title,
  Year,
  imdbRating
}) => {

  movieDiv.innerHTML =
    `<h2 class="movie-name">${Title} | ${Year}</h2>
        <img src="${Poster}" class="movie-poster">
        <p><img src="img/movierating.svg" class="movie-rating"> ${imdbRating}
        | ${Runtime} | ${Rated}
        <br>${Genre}</p>
        <p><b>Plot</b>
        <br>${Plot}</p>
        <p><b>Main Cast</b>
        <br>${Actors}</p>
        <p><b>Director</b>
        <br>${Director}</p>
        <p><b>Awards</b>
        <br>${Awards}</p>`
}

amazonSearchbBtn.addEventListener('click', searchAmazon)
youtubeSearchbBtn.addEventListener('click', searchYouTube)

window.onload = function () {
  document.getElementById('movie-search').value = ''
  localStorage.removeItem('movieName')
}