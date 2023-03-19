import { NavLink } from 'react-router-dom';

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id}>
          <NavLink to={`/movies/${id}`}>
            <div>
              <img
                src={'https://image.tmdb.org/t/p/w500' + poster_path}
                alt={title}
              />
              <h2>{title}</h2>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
