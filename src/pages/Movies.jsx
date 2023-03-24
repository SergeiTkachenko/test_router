// import MovieList from 'components/MoviesList/MovieList';
// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { getMoviesByQuery } from 'services/API';

// import { MagnifyingGlass } from 'react-loader-spinner';
// import { toast } from 'react-toastify';

// export default function Movies() {
//   const [movies, setMovies] = useState([]);
//   const [params, searchParams] = useSearchParams();
//   const query = params.get('query');
//   const [value, setValue] = useState(query ?? '');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!query) return;
//     setLoading(true);
//     getMoviesByQuery(query)
//       .then(setMovies)
//       .catch(error => toast.error(error))
//       .finally(() => setLoading(false));
//   }, [query]);

//   const handleSubmit = e => {
//     e.preventDefault();
//     searchParams({ query: e.target.query.value });
//   };
//   return (
//     <div>
//       {loading && <MagnifyingGlass />}
//       <form onSubmit={handleSubmit}>
//         <input
//           value={value}
//           onChange={e => setValue(e.target.value)}
//           type="text"
//           name="query"
//         />
//         <button>Search</button>
//       </form>
//       <MovieList movies={movies} />
//     </div>
//   );
// }
