// El styles lo importamos aquí, ya se carga después al compilar todo

// import catImage from '../assets/images/cat.jpeg'
import '../scss/styles.scss';
import { createTrendingSlider } from './trending-slider.js';
import { createGallerySections, landingShow } from './sections-landing';
import {
  getAllMoviesData,
  getAllSeriesData,
  getMovieDetails,
  getGenres,
  URLS_MOVIE,
  URLS_TV,
  API_KEY,
  API_URL
} from './api-request.js';
import { itemData, modalShow } from './modal.js';
import { landingMoviesContainer, crossElement } from './const.js';
import {
  createSeeAllContent,
  dataSeeAll,
  seeAllShow,
  seeAllGalleryElement
} from './see-all.js';
import {
  createGenresGallery,
  genresShow,
  galleryGenresElement
} from './genres.js';

const buttonElements = document.getElementById('buttons-pages');
const menuElement = document.getElementById('menu');
let counter = 1;

window.addEventListener('load', async () => {
  const allMoviesData = await getAllMoviesData(1);
  const allSeriesData = await getAllSeriesData(1);

  createTrendingSlider(allMoviesData[0].results, 'movie', 0);
  allMoviesData.slice(1).forEach((data, index) => {
    createGallerySections(
      data.results,
      URLS_MOVIE.slice(1)[index].title,
      URLS_MOVIE[index].type,
      'movie',
      index + 1
    );
  });

  createTrendingSlider(allSeriesData[0].results, 'tv', 0);
  allSeriesData.slice(1).forEach((serie, index) => {
    createGallerySections(
      serie.results,
      URLS_TV.slice(1)[index].title,
      URLS_TV[index].type,
      'tv',
      index + 1
    );
  });
});

landingMoviesContainer.addEventListener('click', async ev => {
  if (ev.target.dataset.item === 'undefined') return;
  const { data, dataCast } = await getMovieDetails(
    ev.target.dataset.item,
    ev.target.dataset.type
  );
  modalShow();
  landingShow();
  itemData(data, dataCast.cast.slice(0, 15));
});
seeAllGalleryElement.addEventListener('click', async ev => {
  if (ev.target.dataset.item === 'undefined') return;
  const { data, dataCast } = await getMovieDetails(
    ev.target.dataset.item,
    ev.target.dataset.type
  );
  modalShow();
  seeAllShow();
  itemData(data, dataCast.cast.slice(0, 15));
});

landingMoviesContainer.addEventListener('click', async ev => {
  console.log(ev.target);
  if (ev.target.classList.contains('button--see-all-movie')) {
    dataSeeAll(
      ev.target,
      1,
      URLS_MOVIE[ev.target.dataset.category].title,
      'movie'
    );
    landingShow();
    seeAllShow();
    buttonElements.addEventListener('click', evButton => {
      if (evButton.target.id === 'next') {
        counter++;
      } else if (evButton.target.id === 'previous') {
        counter--;
        if (counter === 0) {
          counter = 1;
        }
      }
      dataSeeAll(
        ev.target,
        counter,
        URLS_MOVIE[ev.target.dataset.category].title,
        'movie'
      );
    });
  } else if (ev.target.classList.contains('button--see-all-tv')) {
    dataSeeAll(ev.target, 1, URLS_TV[ev.target.dataset.category].title, 'tv');
    landingShow();
    seeAllShow();
    buttonElements.addEventListener('click', evButton => {
      if (evButton.target.id === 'next') {
        counter++;
      } else if (evButton.target.id === 'previous') {
        counter--;
        if (counter === 0) {
          counter = 1;
        }
      }
      dataSeeAll(
        ev.target,
        counter,
        URLS_TV[ev.target.dataset.category].title,
        'tv'
      );
    });
  }
});

crossElement.addEventListener('click', () => {
  modalShow();
  landingShow();
});

menuElement.addEventListener('click', async ev => {
  console.log(ev.target.id);
  if (ev.target.id === 'menu-movies') {
    const { genres } = await getGenres('movie');
    createGenresGallery(genres);
    genresShow();
    landingShow();
  } else if (ev.target.id === 'menu-tv') {
    const { genres } = await getGenres('tv');
    createGenresGallery(genres);
    genresShow();
    landingShow();
  }
});

galleryGenresElement.addEventListener('click', async ev => {});
