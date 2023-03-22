import MovieList from 'components/MoviesList/MovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/API';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [params, searchParams] = useSearchParams();
  const query = params.get('query');
  const [value, setValue] = useState(query ?? '');

  useEffect(() => {
    if (!query) return;
    getMoviesByQuery(query).then(setMovies);
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    searchParams({ query: e.target.query.value });
  };
  return (
    <div>
      <h2>Movies</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          type="text"
          name="query"
        />
        <button>Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}
