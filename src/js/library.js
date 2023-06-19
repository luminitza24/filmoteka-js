
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

function getMovieFromLocalStorage(key) {
  const storageValue = localStorage.getItem(key);
  const dataMovie = JSON.parse(storageValue);
  return dataMovie;
}

export { getMovieFromLocalStorage };
  
  const watched = document.querySelector('.js-watched');
const queue = document.querySelector('.js-queue');

function openQueue() {
  watched.classList.remove('is-active');
  queue.classList.add('is-active');
  renderDefalt();
  const films = getMovieFromLocalStorage('queue');

  if (!films || films.length === 0) {
    return;
  }
  let perPage = 20;
  let totalPages = Math.ceil(films.length / perPage);
  createMarkUpListFilm(1, films);
  renderBtnPag(1, totalPages);
  handlerPagination(totalPages, 'queue');
  showLabModal('queue');
}

export { openQueue };
  
  
  function openWatched() {
  watched.classList.add('is-active');
  queue.classList.remove('is-active');
  renderDefalt();
  const films = getMovieFromLocalStorage('watched');

  if (!films || films.length === 0) {
    return;
  }
  let perPage = 20;
  let totalPages = Math.ceil(films.length / perPage);
  createMarkUpListFilm(1, films);
  renderBtnPag(1, totalPages);
  handlerPagination(totalPages, 'watched');
  showLabModal('watched');
}

export { openWatched };
  
  
  
// document.getElementById("my-library-save-button-watched").addEventListener("click", function() {
//   window.location.href = "http://localhost:1234/library.html";
// });

// document.getElementById("my-library-save-button-queue").addEventListener("click", function() {
//   window.location.href = "http://localhost:1234/library.html";
// });


document.querySelector("modal__button__item-watched").addEventListener("click", function() {
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
