import { NavLink, useLocation } from 'react-router-dom';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title, name, poster_path }) => (
        <li key={id}>
          <NavLink state={{ from: location }} to={`/movies/${id}`}>
            <div>
              <img src={BASE_IMG_URL + poster_path} alt={title} />
              <h2>{title ?? name}</h2>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
