const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=0950b92375366e54461d6322f5781043';

const URLS = {
  trendingDayAll: API_URL + '/trending/all/day?' + API_KEY,
  trendingWeekAll: API_URL + '/trending/all/week?' + API_KEY,
  trendingWeekMovie: API_URL + '/trending/movie/week?' + API_KEY,
  trendingWeekTv: API_URL + '/trending/tv/week?' + API_KEY,
  popularMovies: API_URL + '/movie/popular?' + API_KEY,
  popularTv: API_URL + '/tv/popular?' + API_KEY,
  topRatedMovies: API_URL + '/movie/top_rated?' + API_KEY,
  topRatedTv: API_URL + '/tv/top_rated?' + API_KEY,
  upComingMovies: API_URL + '/movie/upcoming?' + API_KEY
};

export { API_KEY, API_URL, URLS };
