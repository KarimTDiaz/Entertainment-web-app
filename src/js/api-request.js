import { fetchData } from './utils';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=0950b92375366e54461d6322f5781043';
const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

const URLS_MOVIE = [
  {
    link: API_URL + '/trending/movie/week' + API_KEY,
    title: 'Trending',
    type: 'Movies'
  },
  {
    link: API_URL + '/movie/popular' + API_KEY,
    title: 'Popular',
    type: 'Movies'
  },
  {
    link: API_URL + '/movie/top_rated' + API_KEY,
    title: 'Top Rated',
    type: 'Movies'
  },
  {
    link: API_URL + '/movie/now_playing' + API_KEY,
    title: 'Now Playing',
    type: 'Movies'
  },
  {
    link: API_URL + '/movie/upcoming' + API_KEY,
    title: 'Upcoming',
    type: 'Movies'
  }
];

const URLS_TV = [
  {
    link: API_URL + '/trending/tv/week' + API_KEY,
    title: 'Trending',
    type: 'TV Series'
  },
  {
    link: API_URL + '/tv/popular' + API_KEY,
    title: 'Popular',
    type: 'TV Series'
  },
  {
    link: API_URL + '/tv/top_rated' + API_KEY,
    title: 'Top Rated',
    type: 'TV Series'
  },
  {
    link: API_URL + '/tv/on_the_air' + API_KEY,
    title: 'On Air',
    type: 'TV Series'
  }
];

const getAllMoviesData = async counter => {
  const allMoviesPromises = await Promise.all(
    URLS_MOVIE.map(obj => fetchData(obj.link + `&page=${counter}`))
  );
  return allMoviesPromises;
};

const getAllSeriesData = async counter => {
  const allSeriesPromises = await Promise.all(
    URLS_TV.map(obj => fetchData(obj.link + `&page=${counter}`))
  );
  return allSeriesPromises;
};

const getMovieDetails = async (id, media) => {
  const data = await fetchData(API_URL + `/${media}/` + id + API_KEY);
  const dataCast = await fetchData(
    API_URL + `/${media}/` + id + '/credits' + API_KEY
  );
  return { data, dataCast };
};

const getGenres = async media => {
  const genres = await fetchData(API_URL + `/genre/${media}/list` + API_KEY);
  console.log(genres);
  return { genres };
};

export {
  getAllMoviesData,
  getAllSeriesData,
  getMovieDetails,
  getGenres,
  URLS_MOVIE,
  URLS_TV,
  API_URL,
  API_KEY,
  IMAGE_URL
};
