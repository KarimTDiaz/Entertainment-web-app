import { fetchData, createElement, fillElement } from './utils.js';
import { API_KEY, API_URL, getMovieDetails, IMAGE_URL } from './api-request.js';
import { crossIcon } from './images.js';
const modalImageElement = document.getElementById('modal-image');
const infoTitleElement = document.getElementById('info-title');
const infoTagLineElement = document.getElementById('info-tagline');
const infoRateElement = document.getElementById('info-rate');
const infoLengthElement = document.getElementById('info-length');
const infoLanguageElement = document.getElementById('info-language');
const infoYearElement = document.getElementById('info-year');
const infoStatusElement = document.getElementById('info-status');
const synopsysElement = document.getElementById('synopsys');

const createModalInfo = (item, itemCast) => {
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
      info: item.vote_average / 2
    },
    {
      element: infoLengthElement,
      info: item.runtime + 'min.'
    },
    {
      element: infoLanguageElement,
      info: item.spoken_languages[0].english_name
    },
    {
      element: infoYearElement,
      info: item.release_date.slice(0, 4)
    },
    {
      element: infoStatusElement,
      info: 'N/A'
    },
    {
      element: synopsysElement,
      info: item.overview
    }
  ];
  const fragmentModal = document.createDocumentFragment();
  fillElement(modalImageElement, '', IMAGE_URL + item.poster_path);
  modalObj.forEach((item, index) => {
    fillElement(modalObj[index].element, modalObj[index].info);
  });
};

const itemData = async (data, dataCast) => {
  createModalInfo(data, dataCast);
};
export { itemData, createModalInfo };
