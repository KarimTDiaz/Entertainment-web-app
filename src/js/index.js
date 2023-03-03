// El styles lo importamos aquí, ya se carga después al compilar todo

// import catImage from '../assets/images/cat.jpeg'
import '../scss/styles.scss';
import { createTrendingSlider } from './trending-slider.js';
import { createGallerySections } from './sections-landing';
import {
  getAllMoviesData,
  getAllSeriesData,
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
      URLS_MOVIES[index].type
    );
  });
  createTrendingSlider(allSeriesData[0].results);

  allSeriesData.slice(1).forEach((serie, index) => {
    createGallerySections(
      serie.results,
      URLS_SERIES.slice(1)[index].title,
      URLS_SERIES[index].type
    );
  });
});

document.body.addEventListener('click', async ev => {
  const allMoviesData = await getAllMoviesData();
  let dataset = ev.target.dataset.item;
  allMoviesData.forEach((data, index) => {
    data.results.forEach((result, index) => {
      if (result.id === dataset) {
        console.log();
      }
    });
  });

  itemData(ev.target.dataset.item);
});
