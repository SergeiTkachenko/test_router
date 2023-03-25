import { useEffect, useState } from 'react';
import MovieList from 'components/MoviesList/MovieList';
import { toast } from 'react-toastify';
import { getUpcomingMovies } from 'services/API';
import Spiner from 'components/Spiner/spiner';

export default function UpcomingMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  // getUpcomingMovies();

  // useEffect(() => {
  //   setLoading(true);
  //   getUpcomingMovies()
  //     .then(setMovies)
  //     .catch(error => toast.error(error))
  //     .finally(() => setLoading(false));
  // }, []);

  useEffect(() => {
    setLoading(true);

    getUpcomingMovies(page)
      .then(newMovies => {
        setMovies(movies => [...movies, ...newMovies]);
      })
      .catch(error => toast.error(error))
      .finally(() => setLoading(false));
  }, [page]);

  function handleScroll() {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (bottom) {
      setPage(page => page + 1);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {loading && <Spiner></Spiner>}
      <MovieList movies={movies} />
    </div>
  );
}
