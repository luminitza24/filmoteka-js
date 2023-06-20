import { fetchGenreList, getGenres } from './fetchGenre';
import { getGalleryElement } from './markup';
const limit = 20;
let skip = 0;
let currentPage = 0;
let totalPages = false;

const pagination = () => {
  const galleryElements = document.querySelectorAll('.gallery__items');
  galleryElements.forEach(element => {
    const button = document.querySelector('.pagination-button');
    button.addEventListener('click', getGalleryElement());
    element = document.createElement('div');
    const elementPagination = document.querySelector('.pagination');
    elementPagination.appendChild(element);
  });
};
