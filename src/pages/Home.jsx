// import { getTrendingMovies } from 'services/API';
// import { useEffect, useState } from 'react';
// import MovieList from 'components/MoviesList/MovieList';
// import { toast } from 'react-toastify';
// import Spiner from 'components/Spiner/spiner';

// export default function Home() {
//   const [movies, setMovies] = useState([]);

//   const [loading, setLoading] = useState(false);

//   getTrendingMovies();

//   useEffect(() => {
//     setLoading(true);
//     getTrendingMovies()
//       .then(setMovies)
//       .catch(error => toast.error(error))
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <div>
//       {loading && <Spiner></Spiner>}
//       <MovieList movies={movies} />
//     </div>
//   );
// }

import { getTrendingMovies } from 'services/API';
import { useEffect, useState } from 'react';
import MovieList from 'components/MoviesList/MovieList';
import { toast } from 'react-toastify';
import Spiner from 'components/Spiner/spiner';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    getTrendingMovies(page)
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
