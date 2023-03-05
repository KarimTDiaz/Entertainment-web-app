import { createElement } from './utils.js';
import { landingMoviesContainer } from './const.js';
import { IMAGE_URL } from './api-request.js';
import { mediaMovieIcon, mediaTvIcon } from './images.js';

const createTrendingSlider = (trendingMovies, dataType, dataCategory) => {
  const fragment = document.createDocumentFragment();
  console.log(dataType);

  const trendingSection = createElement('div', ['trending']);
  const trendingTop = createElement('div', ['trending__top']);
  const trendingTitle = createElement('h2', ['title'], 'Trending');
  const trendingButtonMedia = createElement(
    'p',
    ['button', 'button--media'],
    'MOVIES'
  );
  const trendingButtonSeeAll = createElement(
    'a',
    ['button', `button--see-all-${dataType}`],
    'SEE ALL',
    'undefined',
    'undefined',
    dataCategory
  );
  trendingTop.append(trendingTitle, trendingButtonMedia, trendingButtonSeeAll);
  const trendingSlider = createElement('div', ['trending__slider']);
  trendingMovies.forEach((movie, index) => {
    const trendingItem = createElement(
      'div',
      ['trending__item'],
      '',
      movie.id,
      dataType
    );
    trendingItem.style.backgroundImage = `url(${IMAGE_URL}${movie.backdrop_path})`;
    const trendingItemBookmarkContainer = createElement('div', ['bookmark']);
    const trendingItemBookmark = createElement(
      'img',
      ['bookmark--image'],
      'assets/icon-bookmark-empty.svg'
    );
    trendingItemBookmarkContainer.append(trendingItemBookmark);
    const trendingInfoContainer = createElement('div', ['trending__info']);
    const trendingInfo = createElement('div', ['trending__info-top']);
    const trendingYear = createElement(
      'p',
      ['text'],
      movie.release_date
        ? movie.release_date.slice(0, 4)
        : movie.first_air_date.slice(0, 4)
    );
    const trendingMediaIcon = createElement(
      'img',
      ['icon', 'icon--media'],
      movie.title ? mediaMovieIcon : mediaTvIcon
    );
    const trendingMedia = createElement(
      'p',
      ['text'],
      movie.title ? 'Movies' : 'TV Series'
    );

    const trendingTitle = createElement(
      'h3',
      ['title', 'title--small'],
      movie.title ? movie.title : movie.name
    );

    trendingInfo.append(trendingYear, trendingMediaIcon, trendingMedia);
    trendingInfoContainer.append(trendingInfo, trendingTitle);
    trendingItem.append(trendingItemBookmark, trendingInfoContainer);
    trendingSlider.append(trendingItem);
  });

  trendingSection.append(trendingTop, trendingSlider);
  fragment.append(trendingSection);
  landingMoviesContainer.append(fragment);
};

export { createTrendingSlider };
