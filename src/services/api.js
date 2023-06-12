import axios from 'axios';

// const API_KEY = '7625a85f6bb1f7d3f46152fac6672840';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: `7625a85f6bb1f7d3f46152fac6672840`,
  include_adult: false,
};

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/all/day`);

  return response.data;
};
