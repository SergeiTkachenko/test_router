import { useEffect, useState } from 'react';
import MovieList from 'components/MoviesList/MovieList';
import { toast } from 'react-toastify';
import { getPopularMovies } from 'services/API';
import Spiner from 'components/Spiner/spiner';

export default function PopularMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  getPopularMovies();

  useEffect(() => {
    setLoading(true);
    getPopularMovies()
      .then(setMovies)
      .catch(error => toast.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading && <Spiner></Spiner>}
      <MovieList movies={movies} />
    </div>
  );
}
