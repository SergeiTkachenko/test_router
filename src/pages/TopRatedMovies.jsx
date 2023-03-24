import { getTopMovies } from 'services/API';
import { useEffect, useState } from 'react';
import MovieList from 'components/MoviesList/MovieList';
import { toast } from 'react-toastify';
import Spiner from 'components/Spiner/spiner';

export default function TopRatedMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  getTopMovies();

  useEffect(() => {
    setLoading(true);
    getTopMovies()
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
