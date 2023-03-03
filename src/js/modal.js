import { fetchData } from './utils.js';
import { API_KEY, API_URL } from './api-request.js';

const createModalInfo = movie => {
  const modalFragment = document.createDocumentFragment();
};

const itemData = async item => {
  const data = await fetchData(API_URL + '/movie/' + item + '?' + API_KEY);
  const dataCast = await fetchData(
    API_URL + '/movie/' + item + '/' + 'credits?' + API_KEY
  );
  console.log(data);
  console.log(dataCast.cast.slice(0, 15));
  createModalInfo(data);
};
export { itemData, createModalInfo };
