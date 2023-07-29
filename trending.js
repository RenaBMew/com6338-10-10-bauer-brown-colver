const API_KEY = 'api_key=6d769d3ec35f5382933b388aff8b6c58';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

const main = document.getElementById('mainSection');
const form = document.querySelector('form');
const search = document.getElementById('search');

getMovies(API_URL);

function getMovies(url) {

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.results);

            showMovies(data.results);
        })
}

function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const { title, poster_path, vote_average, overview, id } = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <a href="https://www.themoviedb.org/movie/${id}" target="_new"><img src="${IMAGE_URL + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                    <p>${overview}</p>
                    </div></a>
                    `
        main.appendChild(movieElement);
    })
}

function getColor(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}