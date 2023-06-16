import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const searchParams = new URLSearchParams({
  api_key: '7625a85f6bb1f7d3f46152fac6672840',
  language: 'en-US',
  include_adult: false,
});

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/all/day?${searchParams}`);

  return response.data;
};

export const getSearchMovies = async query => {
  const response = await axios.get(
    `/search/movie?${searchParams}&query=${query}`
  );

  return response.data;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}?${searchParams}`);

  return response.data;
};

export const getMovieCast = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits?${searchParams}`);

  return response.data;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews?${searchParams}`);

  return response.data;
};
