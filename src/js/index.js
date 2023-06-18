import { fetchGenreList } from './fetchGenre';
import { handleResponse } from './markup';
import { fetchPopularMovies } from './fetchmvs';
import './search';
import { initializeModal } from './modal';

const currentPage = 1;

const getGalleryElement = () => document.querySelector('.gallery');

const initialize = async () => {
  const galleryElement = getGalleryElement();
  if (!galleryElement) {
    return;
  }
};

const initializeApp = async () => {
  try {
    const genreList = await fetchGenreList();
    const popularMovies = await fetchPopularMovies(currentPage);
    handleResponse(popularMovies, true, genreList);  
    initializeModal();
  } catch (error) {
    console.error('Error', error);
  }

  initialize();
};

initializeApp();