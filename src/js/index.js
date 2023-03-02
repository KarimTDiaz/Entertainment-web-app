// El styles lo importamos aquí, ya se carga después al compilar todo

// import catImage from '../assets/images/cat.jpeg'
import '../scss/styles.scss';
import { trendingMoviesRequest } from './trending-slider.js';
import { sectionsBucle, sectionsArray } from './sections-landing';
import { URLS__MOVIES, URLS__SERIES, API_URL, API_KEY } from './api-request.js';

trendingMoviesRequest();
sectionsBucle(sectionsArray);
