const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=0950b92375366e54461d6322f5781043';
const API_POPULARITY =
  API_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL_POSTER = 'https://image.tmdb.org/t/p/w500';
const API_RATED =
  API_URL +
  '/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&' +
  API_KEY;
const API_TV = API_URL + '/tv/popular?' + API_KEY + '&language=en-US&page=1';

const fetchData = async url => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
const createDivMovie = movies => {
  console.log(movies);
  const fragment = document.createDocumentFragment();
  movies.results.forEach(result => {
    const newDiv = document.createElement('div');
    const divSRC = document.createElement('img');
    divSRC.src = IMG_URL_POSTER + result.backdrop_path;
    newDiv.append(divSRC);
    fragment.append(newDiv);
    console.log(result.poster_path);
  });
  document.body.append(fragment);
};

const lookRated = movies => {
  console.log(movies);
};

const popularMovies = async popularMovies => {
  const data = await fetchData(API_POPULARITY);
  createDivMovie(data);
};

const ratedMovies = async ratedMovies => {
  const data = await fetchData(API_TV);
  lookRated(data);
};

export { popularMovies, ratedMovies };
