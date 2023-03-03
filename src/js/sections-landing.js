import { createElement } from './utils.js';
import { landingMoviesContainer } from './const.js';
import { mediaMovieIcon, mediaTvIcon } from './images.js';
import { IMAGE_URL } from './api-request.js';
const numberOfGalleryItems = 8;

const landingShow = () => {
  landingMoviesContainer.classList.add('landing-container--unshow');
};

const createGallerySections = (sections, title, media, dataType) => {
  const fragmentSection = document.createDocumentFragment();
  const sectionLanding = createElement('section', [
    'section',
    'section--landing'
  ]);
  const sectionLandingTop = createElement('div', ['section__top']);
  const sectionLandingTitle = createElement('h2', ['title'], title);
  const sectionLandingButtonMedia = createElement(
    'p',
    ['button', 'button--media'],
    media
  );
  const sectionLandingButtonSeeAll = createElement(
    'a',
    ['button', 'button--see-all'],
    'SEE ALL'
  );
  sectionLandingTop.append(
    sectionLandingTitle,
    sectionLandingButtonMedia,
    sectionLandingButtonSeeAll
  );
  const gallery = createElement('div', ['gallery']);

  for (let index = 0; index < numberOfGalleryItems; index++) {
    const galleryItem = createElement(
      'div',
      ['gallery__item'],
      '',
      sections[index].id,
      dataType
    );
    const galleryImage = createElement(
      'img',
      ['gallery__image'],
      IMAGE_URL + sections[index].backdrop_path
    );
    const galleryInfo = createElement('div', ['gallery__info']);
    const galleryInfoTop = createElement('div', ['gallery__info-top']);
    const galleryInfoYear = createElement('p', ['text'], '2019');
    const galleryInfoMediaIcon = createElement(
      'img',
      ['icon', 'icon--media'],
      sections[index].title ? mediaMovieIcon : mediaTvIcon
    );

    const galleryInfoMedia = createElement('p', ['text'], media);
    const galleryItemTitle = createElement(
      'h3',
      ['title', 'title--gallery'],
      sections[index].title ? sections[index].title : sections[index].name
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

export { createGallerySections, landingShow };
