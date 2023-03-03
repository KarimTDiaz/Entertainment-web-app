import { createElement, fillElement } from './utils.js';
import { IMAGE_URL } from './api-request.js';
const modalElement = document.getElementById('modal');
const modalImageElement = document.getElementById('modal-image');
const infoTitleElement = document.getElementById('info-title');
const infoTagLineElement = document.getElementById('info-tagline');
const infoRateElement = document.getElementById('info-rate');
const firstItemElement = document.getElementById('first-list-item');
const firstItemTextElement = document.getElementById('first-list-item-text');
const secondItemElement = document.getElementById('second-list-item');
const secondItemTextElement = document.getElementById('second-list-item-text');
const thirdItemElement = document.getElementById('third-list-item');
const thirdItemTextElement = document.getElementById('third-list-item-text');
const fourthItemTextElement = document.getElementById('fourth-list-item-text');
const synopsysElement = document.getElementById('synopsys');

const infoGenresElement = document.getElementById('genre');
const infoCastElement = document.getElementById('casts');

const modalShow = () => {
  modalElement.classList.add('modal--show');
};
const createModalInfo = (item, itemCast) => {
  infoGenresElement.innerHTML = '';
  infoCastElement.innerHTML = '';

  const modalObj = [
    {
      element: infoTitleElement,
      info: item.title
    },
    {
      element: infoTagLineElement,
      info: item.tagline
    },
    {
      element: infoRateElement,
      info: (item.vote_average / 2).toFixed(1)
    },
    {
      element: firstItemElement,
      info: item.title ? 'Length' : 'Language'
    },
    {
      element: firstItemTextElement,
      info: item.title
        ? item.runtime + 'min.'
        : item.spoken_languages[0].english_name
    },
    {
      element: secondItemElement,
      info: item.title ? 'Language' : 'First Air'
    },
    {
      element: secondItemTextElement,
      info: item.title
        ? item.spoken_languages[0].english_name
        : item.first_air_date
    },
    {
      element: thirdItemElement,
      info: item.title ? 'Year' : 'Last Air'
    },
    {
      element: thirdItemTextElement,
      info: item.title ? item.release_date.slice(0, 4) : item.last_air_date
    },
    {
      element: fourthItemTextElement,
      info: item.title ? 'N/A' : item.status
    },
    {
      element: synopsysElement,
      info: item.overview
    }
  ];

  fillElement(modalImageElement, '', IMAGE_URL + item.poster_path);
  modalObj.forEach((item, index) => {
    fillElement(modalObj[index].element, modalObj[index].info);
  });

  const fragmentGenres = document.createDocumentFragment();
  item.genres.forEach((genre, index) => {
    const genreItem = createElement('li', [
      'genres__list-item',
      'item-bordered'
    ]);
    const genreText = createElement('p', ['text', 'text--genres'], genre.name);
    genreItem.append(genreText);
    fragmentGenres.append(genreItem);
  });

  const fragmentCasts = document.createDocumentFragment();
  itemCast.forEach(cast => {
    const castItem = createElement('li', ['casts__list-item', 'item-bordered']);
    const castItemText = createElement('p', ['text', 'text--cast'], cast.name);
    castItem.append(castItemText);
    fragmentCasts.append(castItem);
  });

  infoGenresElement.append(fragmentGenres);
  infoCastElement.append(fragmentCasts);
};

const itemData = async (data, dataCast) => {
  createModalInfo(data, dataCast);
};
export { itemData, createModalInfo, modalShow };
