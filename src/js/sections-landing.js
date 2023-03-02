import { fetchData, createElement } from './utils.js';
import { API_KEY, API_URL, URLS } from './api-request.js';
import { landingMoviesContainer } from './trending-slider.js';

const sectionsArray = ['popularMovies', 'topRatedMovies', 'upComingMovies'];
const numberOfGalleryItems = 8;

const createGallerySections = sections => {
  const fragmentSection = document.createDocumentFragment();
  const sectionLanding = createElement(
    'section',
    'section',
    'section--landing'
  );
  const sectionLandingTop = createElement('div', 'section__top');
  const sectionLandingTitle = createElement('h2', 'title', 'x', 'Popular');
  const sectionLandingButtonMedia = createElement(
    'p',
    'button',
    'button--media',
    'MOVIES'
  );
  const sectionLandingButtonSeeAll = createElement(
    'a',
    'button',
    'button--see-all'
  );
  sectionLandingTop.append(
    sectionLandingTitle,
    sectionLandingButtonMedia,
    sectionLandingButtonSeeAll
  );
  const gallery = createElement('div', 'gallery');

  for (let index = 0; index < numberOfGalleryItems; index++) {
    const galleryItem = createElement('div', 'gallery__item');
    const galleryImage = createElement(
      'img',
      'gallery__image',
      'x',
      `https://image.tmdb.org/t/p/original/${sections[index].backdrop_path}`
    );
    const galleryInfo = createElement('div', 'gallery__info');
    const galleryInfoTop = createElement('div', 'gallery__info-top');
    const galleryInfoYear = createElement('p', 'text', 'x', '2019');
    const galleryInfoMediaIcon = createElement(
      'img',
      'icon',
      'icon--media',
      'assets/icon-category-movie.svg'
    );
    const galleryInfoMedia = createElement('p', 'text', 'x', 'Movie');
    const galleryItemTitle = createElement(
      'h3',
      'title',
      'title--gallery',
      sections[index].title
    );
    galleryInfo.append(galleryInfoTop);
    galleryInfoTop.append(
      galleryInfoYear,
      galleryInfoMediaIcon,
      galleryInfoMedia
    );
    galleryItem.append(galleryImage, galleryInfo, galleryItemTitle);
    gallery.append(galleryItem);
  }
  sectionLanding.append(sectionLandingTop, gallery);
  fragmentSection.append(sectionLanding);
  landingMoviesContainer.append(fragmentSection);
};

const allSectionsRequest = async section => {
  const trendingMovies = await fetchData(URLS.popularMovies);
  createGallerySections(trendingMovies.results);
};
const sectionsbucle = sections => {
  sections.forEach(section => {
    allSectionsRequest(section);
  });
};

export { sectionsArray, sectionsbucle };
