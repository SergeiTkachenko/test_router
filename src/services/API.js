import axios from 'axios';

// 054a53d1d89c0404ad32bb4578c2c68b

const agent = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: { api_key: '054a53d1d89c0404ad32bb4578c2c68b' },
});

export async function getMoviesByQuery(query) {
  const movies = await agent.get('search/movie', {
    params: { query },
  });
  return movies.data.results;
}

export async function getTrendingMovies() {
  const movies = await agent.get('trending/movie/day');
  return movies.data.results;
}
