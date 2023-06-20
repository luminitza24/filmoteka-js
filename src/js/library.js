
// export function addMovie(title, regizor) {
//   var savedMovies = localStorage.getItem('movie');
//   if (savedMovies) {
//     var movie = JSON.parse(savedMovies);
//   } else {
//     var movies = [];
//   }
  
//   movies.push({ title: title, regizor: regizor });
  
//   localStorage.setItem('movie', JSON.stringify(movie));
// }

// export function displayMovies() {
//   var savedMovies = localStorage.getItem('movie');
  
//   if (savedMovies) {
//     var movies = JSON.parse(savedMovies);
    
//     movies.forEach(function(movie) {
//       console.log('Title: ' + movie.title + ', Regizor: ' + movie.regizor);
//     });
//   } else {
//     console.log('There are no saved movies.');
//   }
// }

// addMovie('The Shawshank Redemption', 'Frank Darabont');
// addMovie('Inception', 'Christopher Nolan');

// displayMovies();

// function getMovieFromLocalStorage(key) {
//   const storageValue = localStorage.getItem(key);
//   const dataMovie = JSON.parse(storageValue);
//   return dataMovie;
// }

// export { getMovieFromLocalStorage };

  
  
  
// document.getElementById("my-library-save-button-watched").addEventListener("click", function() {
//   window.location.href = "http://localhost:1234/library.html";
// });

// document.getElementById("my-library-save-button-queue").addEventListener("click", function() {
//   window.location.href = "http://localhost:1234/library.html";
// });



// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());

// app.post('/save-data', (req, res) => {
//   const dataToSave = req.body;

//   res.sendStatus(200);
// });

// app.listen(3000, () => {
//   console.log('Serverul este pornit și ascultă pe portul 3000.');
// });





// const dataFromLocalStorage = JSON.parse(localStorage.getItem('nume_cheie'))
// console.log(dataFromLocalStorage);
// const films = dataFromLocalStorage.films;
// const user = dataFromLocalStorage.user;




// const dataFromLocalStorage = {
//   films: [
//     { title: 'Fast x', genre: 'Acțiune' },
//     { title: 'My Fault', genre: 'Romance' },
//     { title: 'Elemental', genre: 'Animation' },
//   ],
//   user: {
//     name: 'John Doe',
//     age: 25,
//   },
// };


// export { getMovieFromLocalStorage };
// const watched = document.querySelector('.js-watched');
// const queue = document.querySelector('.js-queue');
// function openQueue() {
//   watched.classList.remove('is-active');
//   queue.classList.add('is-active');
//   renderDefalt();
//   const films = getMovieFromLocalStorage('queue');
//   if (!films || films.length === 0) {
//     return;
//   }
//   let perPage = 20;
//   let totalPages = Math.ceil(films.length / perPage);
//   markupGalleryItem(1, films);
//   renderBtnPag(1, totalPages);
//   handlerPagination(totalPages, 'queue');
//   openModal('queue');
// }
// export { openQueue };
// function openWatched() {
//   watched.classList.add('is-active');
//   queue.classList.remove('is-active');
//   const films = getMovieFromLocalStorage('watched');
//   if (!films || films.length === 0) {
//     return;
//   }
//   let perPage = 20;
//   let totalPages = Math.ceil(films.length / perPage);
//   markupGalleryItem(1, films);
//   renderBtnPag(1, totalPages);
//   handlerPagination(totalPages, 'watched');
//   openModal('watched');
// }
// document
//   .querySelector('modal__button__item-watched')
//   .addEventListener('click', function () {
//     var movieId = this.getAttribute('data-movie-id');
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', '/modal__button__item-watched', true);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     var data = {
//       movieId: movieId,
//     };
//     xhr.send(JSON.stringify(data));
//   });
// document
//   .querySelector('modal__button__item-queue')
//   .addEventListener('click', function () {
//     var movieId = this.getAttribute('data-movie-id');
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', '/modal__button__item-queue', true);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     var data = {
//       movieId: movieId,
//     };
//     xhr.send(JSON.stringify(data));
//   });
// export { openWatched };
  


document.querySelector("modal__button__item-watched").addEventListener("click", function () {
  var movieId = this.getAttribute("data-movie-id");
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/modal__button__item-watched", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  var data = {
    movieId: movieId
  };

  xhr.send(JSON.stringify(data));
});
document.querySelector("modal__button__item-queue").addEventListener("click", function() {
  var movieId = this.getAttribute("data-movie-id");
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/modal__button__item-queue", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  var data = {
    movieId: movieId
  };

  xhr.send(JSON.stringify(data));
});

import { getGenres, fetchGenreList } from './fetchGenre';
import { handleResponse, markupGalleryItem } from './markup';
import { openModal, initializeModal } from './modal';
function getMovieFromLocalStorage(id) {
  const storageValue = localStorage.getItem(id);
  const dataMovie = JSON.parse(storageValue);
  return dataMovie;
}
  
  
  
  
  const dataToSave = {
 films: [
    { title: 'Fast x', genre: 'Acțiune' },
    { title: 'My Fault', genre: 'Romance' },
    { title: 'Elemental', genre: 'Animation' },
  ],
  user: {
    name: 'John Doe',
    age: 25,
  },
};

fetch('https://api.themoviedb.org/3/genre/movie/list', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(dataToSave),
})
  .then(response => {
    if (response.ok) {
      console.log('Datele au fost salvate cu succes în localStorage.');
    } else {
      console.log('A apărut o eroare la salvarea datelor în localStorage.');
    }
  })
  .catch(error => {
    console.log('A apărut o eroare la comunicarea cu serverul:', error);
  });


function generateMarkup(data) {
  const container = document.querySelector('#container');
  const ul = document.createElement('ul');

  data.films.forEach(film => {
    const li = document.createElement('li');
    li.textContent = `${film.title} - ${film.genre}`;
    ul.appendChild(li);
  });

  container.appendChild(ul);

  const userDetails = document.createElement('p');
  userDetails.textContent = `Nume: ${data.user.name}, Vârstă: ${data.user.age}`;
  container.appendChild(userDetails);
}
generateMarkup(dataFromLocalStorage);



import { getGenres, fetchGenreList } from './fetchGenre';
import { handleResponse, markupGalleryItem } from './markup';
import { openModal, initializeModal } from './modal';
import { showPage } from './page';
const KEY_API = '44cd7d40e9c9ffc80f6b2e51bac6d9ee';
const BASE_URL = 'https://api.themoviedb.org/3/genre/movie/list';
const KEY_QUEUE = 'queue';
const KEY_WATCHED = 'watched';
async function getGenres() {
  const params = new URLSearchParams({
    api_key: KEY_API,
  });
  return await fetch(`${BASE_URL}?${params}`).then(resp => resp.json());
}
function setupToStorage(params) {
  getGenres().then(data => {
    localStorage.setItem('genres', JSON.stringify(data));
  });
}
function isInLocalstorage(key, id) {
  const data = JSON.parse(localStorage.getItem(key));
  if (!data) {
    return false;
  }
  return !!data.find(el => el.id === Number(id));
}
function getMovieFromLocalStorage(id) {
  const storageValue = localStorage.getItem(id);
  const dataMovie = JSON.parse(storageValue);
  return dataMovie;
}
export { getMovieFromLocalStorage };
const watched = document.querySelector('.modal__button__item-watched');
const queue = document.querySelector('.modal__button__item-queue');
function openQueue() {
  watched.classList.remove('is-active');
  queue.classList.add('is-active');
  const films = getMovieFromLocalStorage('queue');
  if (!films || films.length === 0) {
    return;
  }
  let perPage = 20;
  let totalPages = Math.ceil(films.length / perPage);
  markupGalleryItem(1, films);
  paginationButtons(1, totalPages);
  showPage(totalPages, 'queue');
  initializeModal('queue');
}
function openWatched() {
  watched.classList.add('is-active');
  queue.classList.remove('is-active');
  const films = getMovieFromLocalStorage('watched');
  if (!films || films.length === 0) {
    return;
  }
  let perPage = 20;
  let totalPages = Math.ceil(films.length / perPage);
  markupGalleryItem(1, films);
  paginationButtons(1, totalPages);
  showPage(totalPages, 'watched');
  openModal('watched');
}
document
  .querySelector('.modal__button__item-watched')
  .addEventListener('click', function () {
    var movieId = this.getAttribute('data-movie-id');
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/modal__button__item-watched', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    var data = {
      movieId: movieId,
    };
    xhr.send(JSON.stringify(data));
  });
document
  .querySelector('.modal__button__item-queue')
  .addEventListener('click', function () {
    var movieId = this.getAttribute('data-movie-id');
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/modal__button__item-queue', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    var data = {
      movieId: movieId,
    };
    xhr.send(JSON.stringify(data));
  });
function renderCards(films) {
  let perPage = 20;
  let totalPages = Math.ceil(films.length / perPage);
  markupGalleryItem(1, films, KEY_QUEUE);
  paginationButtons(1, totalPages);
  showPage(totalPages, KEY_QUEUE);
  initializeModal(KEY_QUEUE);
}
const refs = {
  btnWatched: document.querySelector('.modal__button__item-queue'),
  btnQueue: document.querySelector('.modal__button__item-watched'),
  gallery: document.querySelector('.gallery'),
  pagination: document.querySelectorAll('#pagination-button'),
};
refs.btnQueue.classList.add('is-active');
refs.btnWatched.addEventListener('click', openWatched);
refs.btnQueue.addEventListener('click', openQueue);
const films = getMovieFromLocalStorage('queue');
if (!films || films.length === 0) {
} else {
  renderCards(films)
}
export { openWatched, renderCards, refs, openQueue, isInLocalstorage };
