import { getAllMoviesData, getAllSeriesData, IMAGE_URL } from './api-request';
import { fillElement, createElement } from './utils.js';
import { mediaMovieIcon, mediaTvIcon } from './images.js';
const seeAllElement = document.getElementById('see-all');
const seeAllTitleElement = document.getElementById('see-all-title');
const seeAllGalleryElement = document.getElementById('gallery-see-all');
const buttonInfoPagesElement = document.getElementById('buton-page');

const seeAllShow = () => {
  if (seeAllElement.classList.contains('see-all--show')) {
    seeAllElement.classList.remove('see-all--show');
  } else {
    seeAllElement.classList.add('see-all--show');
  }
};

const createSeeAllContent = (items, category, media, counter) => {
  seeAllGalleryElement.innerHTML = '';
  console.log(items);
  fillElement(seeAllTitleElement, category);
  fillElement(
    buttonInfoPagesElement,
    `Page ${counter} of ${items.total_pages}`
  );
  const seeAllFragment = document.createDocumentFragment();
  items.results.forEach(item => {
    const galleryItem = createElement(
      'div',
      ['gallery__item'],
      '',
      item.id,
      media
    );
    const galleryImage = createElement(
      'img',
      ['gallery__image'],
      IMAGE_URL + item.backdrop_path
    );
    const galleryItemBookmarkContainer = createElement('div', [
      'bookmark-gallery'
    ]);
    const galleryItemBookmark = createElement(
      'img',
      ['bookmark-gallery--image'],
      'assets/icon-bookmark-empty.svg'
    );
    galleryItemBookmarkContainer.append(galleryItemBookmark);
    const galleryInfo = createElement('div', ['gallery__info']);
    const galleryInfoTop = createElement('div', ['gallery__info-top']);
    const galleryInfoYear = createElement('p', ['text'], '2019');
    const galleryInfoMediaIcon = createElement(
      'img',
      ['icon', 'icon--media'],
      item.title ? mediaMovieIcon : mediaTvIcon
    );
    const galleryInfoMedia = createElement('p', ['text'], media);
    const galleryItemTitle = createElement(
      'h3',
      ['title', 'title--gallery'],
      item.title ? item.title : item.name
    );
    galleryInfo.append(galleryInfoTop);
    galleryInfoTop.append(
      galleryInfoYear,
      galleryInfoMediaIcon,
      galleryInfoMedia
    );
    galleryItem.append(
      galleryImage,
      galleryItemBookmarkContainer,
      galleryInfo,
      galleryItemTitle
    );
    seeAllFragment.append(galleryItem);
  });
  seeAllGalleryElement.append(seeAllFragment);
};

const dataSeeAll = async (ev, counter, category, media) => {
  const allMoviesData = await getAllMoviesData(counter);
  const allSeriesData = await getAllSeriesData(counter);
  if (media === 'movie') {
    createSeeAllContent(
      allMoviesData[ev.dataset.category],
      category,
      media,
      counter
    );
  } else if (media === 'tv') {
    createSeeAllContent(
      allSeriesData[ev.dataset.category],
      category,
      media,
      counter
    );
  }
};

export { createSeeAllContent, dataSeeAll, seeAllShow, seeAllGalleryElement };
