import axios from 'axios';

// 054a53d1d89c0404ad32bb4578c2c68b

const agent = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: { api_key: '054a53d1d89c0404ad32bb4578c2c68b' },
});

export async function getMoviesByQuery(query, page) {
  const movies = await agent.get(`search/movie?page=${page}`, {
    params: { query },
  });
  return movies.data.results;
}

export async function getTrendingMovies(page) {
  const movies = await agent.get(`trending/movie/day?page=${page}`);
  return movies.data.results;
}

export async function getTopMovies(page) {
  const movies = await agent.get(`movie/top_rated?page=${page}`);
  return movies.data.results;
}

export async function getUpcomingMovies(page) {
  const movies = await agent.get(`movie/upcoming?page=${page}`);
  return movies.data.results;
}

export async function getPopularMovies(page) {
  const movies = await agent.get(`movie/popular?page=${page}`);
  return movies.data.results;
}

export async function getMoviesDetailsById(id) {
  const movies = await agent.get(`movie/${id}`);
  return movies.data;
}

export async function getMovieCast(id) {
  const cast = await agent.get(`movie/${id}/credits`);
  return cast.data.cast;
}

export async function getMovieReviews(id) {
  const cast = await agent.get(`movie/${id}/reviews`);
  return cast.data.results;
}
