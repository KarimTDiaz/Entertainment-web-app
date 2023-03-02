import { fetchData, createElement } from './utils.js';
import { API_KEY, API_URL, URLS } from './api-request.js';

const landingMoviesContainer = document.getElementById(
  'movies-landing-container'
);

const createTrendingSlider = trendingMovies => {
  const fragment = document.createDocumentFragment();

  const trendingSection = createElement('div', 'trending');
  const trendingTop = createElement('div', 'trending__top');
  const trendingTitle = createElement('h2', 'title', 'x', 'Trending');
  const trendingButtonMedia = createElement(
    'p',
    'button',
    'button--movie',
    'MOVIES'
  );
  const trendingButtonSeeAll = createElement(
    'a',
    'button',
    'button--see-all',
    'SEE ALL'
  );
  trendingTop.append(trendingTitle, trendingButtonMedia, trendingButtonSeeAll);
  const trendingSlider = createElement('div', 'trending__slider');
  trendingMovies.forEach((movie, index) => {
    const trendingItem = createElement('div', 'trending__item');
    trendingItem.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
    const trendingItemImage = createElement(
      'img',
      'bookmark',
      'x',
      'assets/icon-bookmark-empty.svg'
    );
    const trendingInfoContainer = createElement('div', 'trending__info');
    const trendingInfo = createElement('div', 'trending__info-top');
    const trendingYear = createElement(
      'p',
      'text',
      'x',
      movie.release_date.slice(0, 4)
    );
    const trendingMediaIcon = createElement(
      'img',
      'icon',
      'icon--media',
      'assets/icon-category-movie.svg'
    );
    const trendingMedia = createElement('p', 'text', 'x', 'Movie');

    const trendingTitle = createElement(
      'h3',
      'title',
      'title--small',
      movie.title
    );
    trendingInfo.append(trendingYear, trendingMediaIcon, trendingMedia);
    trendingInfoContainer.append(trendingInfo, trendingTitle);
    trendingItem.append(trendingItemImage, trendingInfoContainer);
    trendingSlider.append(trendingItem);
  });

  trendingSection.append(trendingTop, trendingSlider);
  fragment.append(trendingSection);
  landingMoviesContainer.append(fragment);
};

const allTrendingRequest = async content => {
  console.log(content);
  const trendingMovies = await fetchData(URLS.trendingWeekMovie);
  createTrendingSlider(trendingMovies.results);
};

export { allTrendingRequest, landingMoviesContainer };
