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

const URLS__MOVIES = [
  {
    link: API_URL + '/trending/movie/week?' + API_KEY,
    title: 'Trending',
    type: 'Movies'
  },
  {
    link: API_URL + '/movie/popular?' + API_KEY,
    title: 'Popular',
    type: 'Movies'
  },
  {
    link: API_URL + '/movie/top_rated?' + API_KEY,
    title: 'Top Rated',
    type: 'Movies'
  },
  {
    link: API_URL + '/movie/now_playing?' + API_KEY,
    title: 'Now Playing',
    type: 'Movies'
  },
  {
    link: API_URL + '/movie/upcoming?' + API_KEY,
    title: 'Upcoming',
    type: 'Movies'
  }
];

const URLS__SERIES = [
  {
    link: API_URL + '/trending/tv/week?' + API_KEY,
    title: 'Trending',
    type: 'TV Series'
  },
  {
    link: API_URL + '/tv/popular?' + API_KEY,
    title: 'Popular',
    type: 'TV Series'
  },
  {
    link: API_URL + '/tv/popular?' + API_KEY,
    title: 'Top Rated',
    type: 'TV Series'
  },
  {
    link: API_URL + '/tv/on_the_air?' + API_KEY,
    title: 'On Air',
    type: 'TV Series'
  }
];

export { API_KEY, API_URL, URLS__MOVIES, URLS__SERIES, URLS };
