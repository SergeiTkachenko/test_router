import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Spiner from 'components/Spiner/spiner';
import {
  SearchBtn,
  FormStyled,
  InputStyled,
  NavigationStyled,
  NavLinkStyled,
} from './Navigation.styled';
import MovieList from 'components/MoviesList/MovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/API';

// import { MagnifyingGlass } from 'react-loader-spinner';
import { toast } from 'react-toastify';

export default function Navigation() {
  const [movies, setMovies] = useState([]);
  const [params, searchParams] = useSearchParams();
  const query = params.get('query');
  const [value, setValue] = useState(query ?? '');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    getMoviesByQuery(query)
      .then(setMovies)
      .catch(error => toast.error(error))
      .finally(() => setLoading(false));
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    searchParams({ query: e.target.query.value });
  };

  if (query) {
    return (
      <div>
        <NavigationStyled>
          <NavLinkStyled to="/">Trending</NavLinkStyled>
          <NavLinkStyled to="/top_movies">Top rated</NavLinkStyled>
          <NavLinkStyled to="/popular">Popular</NavLinkStyled>
          <NavLinkStyled to="/upcoming">Upcoming</NavLinkStyled>
        </NavigationStyled>
        <div>
          {loading && <Spiner></Spiner>}
          <FormStyled onSubmit={handleSubmit}>
            <InputStyled
              value={value}
              onChange={e => setValue(e.target.value)}
              type="text"
              name="query"
              placeholder="Search value"
            />
            <SearchBtn>Search</SearchBtn>
          </FormStyled>
        </div>
        <MovieList movies={movies} />
      </div>
    );
  } else {
    return (
      <div>
        <NavigationStyled>
          <NavLinkStyled to="/">Trending</NavLinkStyled>
          <NavLinkStyled to="/top_movies">Top rated</NavLinkStyled>
          <NavLinkStyled to="/popular">Popular</NavLinkStyled>
          <NavLinkStyled to="/upcoming">Upcoming</NavLinkStyled>
        </NavigationStyled>
        <div>
          {loading && <Spiner></Spiner>}
          <FormStyled onSubmit={handleSubmit}>
            <InputStyled
              value={value}
              onChange={e => setValue(e.target.value)}
              type="text"
              name="query"
              placeholder="Search value"
            />
            <SearchBtn>Search</SearchBtn>
          </FormStyled>
        </div>
        <Suspense fallback={<Spiner />}>
          <Outlet />
        </Suspense>
      </div>
    );
  }
}
