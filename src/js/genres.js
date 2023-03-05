import { createElement } from './utils.js';
const galleryGenresElement = document.getElementById('gallery-genres');
const genresPageElement = document.getElementById('genres-page');

const genresShow = () => {
  genresPageElement.classList.add('genres-page--show');
};
const createGenresGallery = genres => {
  galleryGenresElement.innerHTML = '';
  const genresFragment = document.createDocumentFragment();
  genres.genres.forEach(genre => {
    console.log(genre);
    const genreGalleryItem = createElement(
      'div',
      ['gallery--genres-item'],
      '',
      genre.id
    );
    const genreGalleryItemText = createElement('p', ['title'], genre.name);
    genreGalleryItem.append(genreGalleryItemText);
    genresFragment.append(genreGalleryItem);
  });
  galleryGenresElement.append(genresFragment);
};
export { createGenresGallery, genresShow, galleryGenresElement };
