// El styles lo importamos aquí, ya se carga después al compilar todo

// import catImage from '../assets/images/cat.jpeg'
import '../scss/styles.scss';
import { createTrendingSlider } from './trending-slider.js';
import { createGallerySections } from './sections-landing';
import {
  getAllMoviesData,
  getAllSeriesData,
  getMovieDetails,
  URLS_MOVIES,
  URLS_SERIES
} from './api-request.js';
import { createModalInfo, itemData } from './modal.js';

window.addEventListener('load', async () => {
  const allMoviesData = await getAllMoviesData();
  const allSeriesData = await getAllSeriesData();
  createTrendingSlider(allMoviesData[0].results);
  allMoviesData.slice(1).forEach((data, index) => {
    createGallerySections(
      data.results,
      URLS_MOVIES.slice(1)[index].title,
      URLS_MOVIES[index].type,
      'movie'
    );
  });
  createTrendingSlider(allSeriesData[0].results);

  allSeriesData.slice(1).forEach((serie, index) => {
    createGallerySections(
      serie.results,
      URLS_SERIES.slice(1)[index].title,
      URLS_SERIES[index].type,
      'tv'
    );
  });
});

document.body.addEventListener('click', async ev => {
  const { data, dataCast } = await getMovieDetails(ev.target.dataset.item);
  itemData(data, dataCast.cast.slice(0, 15));
});
