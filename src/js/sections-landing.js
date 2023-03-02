import { fetchData, createElement } from './utils.js';
import { API_KEY, API_URL, URLS } from './api-request.js';
import { landingMoviesContainer } from './trending-slider.js';

const sectionsArray = ['popularMovies', 'topRatedMovies', 'upComingMovies'];

const allSectionsRequest = async section => {
  const trendingMovies = await fetchData(URLS);
  console.log(URLS);
};
const sectionsbucle = sections => {
  sections.forEach(section => {
    allSectionsRequest(section);
  });
};

export { sectionsArray, sectionsbucle };
