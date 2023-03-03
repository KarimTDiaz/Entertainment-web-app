// El styles lo importamos aquí, ya se carga después al compilar todo

// import catImage from '../assets/images/cat.jpeg'
import '../scss/styles.scss';
import { createTrendingSlider } from './trending-slider.js';
import { createGallerySections, landingShow } from './sections-landing';
import {
  getAllMoviesData,
  getAllSeriesData,
  getMovieDetails,
  URLS_MOVIES,
  URLS_SERIES
} from './api-request.js';
import { itemData, modalShow } from './modal.js';
import { landingMoviesContainer } from './const.js';

window.addEventListener('load', async () => {
  const allMoviesData = await getAllMoviesData();
  const allSeriesData = await getAllSeriesData();
  createTrendingSlider(allMoviesData[0].results, 'movie');
  allMoviesData.slice(1).forEach((data, index) => {
    createGallerySections(
      data.results,
      URLS_MOVIES.slice(1)[index].title,
      URLS_MOVIES[index].type,
      'movie'
    );
  });
  createTrendingSlider(allSeriesData[0].results, 'tv');

  allSeriesData.slice(1).forEach((serie, index) => {
    createGallerySections(
      serie.results,
      URLS_SERIES.slice(1)[index].title,
      URLS_SERIES[index].type,
      'tv'
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
