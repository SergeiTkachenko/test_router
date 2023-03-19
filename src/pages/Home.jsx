import { getTrendingMovies } from 'services/API';
import { useEffect, useState } from 'react';
import MovieList from 'components/MoviesList/MovieList';

export default function Home() {
  const [movies, setMovies] = useState([]);
  getTrendingMovies();
  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <MovieList movies={movies} />
    </div>
  );
}
