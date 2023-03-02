// El styles lo importamos aquí, ya se carga después al compilar todo

// import catImage from '../assets/images/cat.jpeg'
import '../scss/styles.scss';
import { createTrendingSlider } from './trending-slider.js';
import { createGallerySections } from './sections-landing';
import { getAllMoviesData, getAllSeriesData } from './api-request.js';

window.addEventListener('load', async () => {
  const allMoviesData = await getAllMoviesData();
  const allSeriesData = await getAllSeriesData();
  createTrendingSlider(allMoviesData[0].results);
  allMoviesData.slice(1).forEach(movie => {
    createGallerySections(movie.results);
  });
  createTrendingSlider(allSeriesData[0].results);

  allSeriesData.slice(1).forEach(serie => {
    createGallerySections(serie.results);
  });
});
