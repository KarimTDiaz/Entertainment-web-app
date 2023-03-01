const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=0950b92375366e54461d6322f5781043';

const URLS = {
  trendingDayAll: API_URL + '/trending/all/day?' + API_KEY,
  trendingWeekAll: API_URL + '/trending/week/day?' + API_KEY,
  trendingWeekMovie: API_URL + '/trending/movie/week?' + API_KEY,
  trendingWeekTv: API_URL + '/trending/tv/week?' + API_KEY,
  popularMovies: API_URL + '/movie/popular?' + API_KEY,
  popularTv: API_URL + '/tv/popular?' + API_KEY,
  topRatedMovies: API_URL + '/movie/top_rated?' + API_KEY,
  topRatedTv: API_URL + '/tv/top_rated?' + API_KEY,
  upComingMovies: API_URL + '/movie/upcoming?' + API_KEY
};

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
  const data = await fetchData(URLS.upComingMovies);
  createDivMovie(data);
};

const ratedMovies = async ratedMovies => {
  const data = await fetchData(URLS.upComingMovies);
  lookRated(data);
};

export { popularMovies, ratedMovies };
