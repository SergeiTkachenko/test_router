import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { MovieItemStyled, MovieListStyled } from './MoviesList.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <MovieListStyled>
      {movies.map(({ id, title, name, poster_path }) => (
        <MovieItemStyled key={id}>
          <NavLink state={{ from: location }} to={`/movies/${id}`}>
            <div>
              <img src={BASE_IMG_URL + poster_path} alt={title} />
              <h2>{title ?? name}</h2>
            </div>
          </NavLink>
        </MovieItemStyled>
      ))}
    </MovieListStyled>
  );
}

MovieList.propTypes = {
  value: PropTypes.array,
};
