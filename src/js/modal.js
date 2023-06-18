
import {fetchMovieDetails }from './fetchmvs'; 

const modal = document.querySelector(".modal");
const modalContent = modal.querySelector(".modal__content"); 

const toggleModal = () => {
  modal.classList.toggle("modal__is-hidden");
};

const createModalContent = (movie) => {
    //console.log(movie);
    const genres = movie.genres ? movie.genres.map(genre => genre.name) : ['Unknown'];

    const coverUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : nullPoster;
    //console.log(movie.genre_ids);
    const markup = `
    <section class="section__modal"> 
                <img src="${coverUrl}" alt="${movie.title}" loading="lazy" class="img_mvi" />
            
            <ul  class="ul__list">
            <h1 class="tittle__modal">${movie.title} </h1>
           
             <li class="vote_count">
                <p>Vote Average: ${movie.vote_average}</p>
                <p>Vote Count: ${movie.vote_count}</p>
            </li>
            <li>
            <p class="text__modal">
            <b class"detalis"> popularity: ${movie.popularity}</b>
            </p>
            </li>
            <li>
            
            <p class="text__modal">
            <b class"detalis"> original_title: ${movie.original_title }</b>
            </p>
            </li>
            <li>
                <p class=" text__modal gallery__items__details--info">
                    <b class"detalis">Genres: ${genres.join(", ")}</b>
                </p>
            </li>
            <li>
            <h3 class="details__info">about</h3>
                <p gallery__items__details--info>${movie.overview}</p>
            </li>
           <ul class="button_list">
            <li>
            <button class="modal__button__item-queue" type="button">add to Watched</button>
            </li>
            <li>
            <button class="modal__button__item-queue" type="button"> add to queue</button>
            </li>
            </ul>
        </ul>
        </section>
    `;
    

    modalContent.innerHTML = markup;
};


const openModal = async (movieId) => {
    console.log("Open modal called with ID:", movieId);  
  
    const movie = await fetchMovieDetails(movieId);
  
    if (movie) {
      createModalContent(movie);
      toggleModal();
    }
  };
  
  const initializeModal = () => {
    const galleryElements = document.querySelectorAll(".gallery__items");
    galleryElements.forEach((element) => {
      element.addEventListener("click", async (event) => {
        const movieId = event.currentTarget.dataset.id;
        //const movie = await fetchMovieDetails(movieId);
        openModal(movieId);
      });
    });
  
    const closeModalBtn = document.querySelector("[data-modal-close]");
    if (closeModalBtn) {
      closeModalBtn.addEventListener("click", toggleModal);
    }
  };

export { openModal, initializeModal };
