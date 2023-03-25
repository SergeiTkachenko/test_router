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
import { toast } from 'react-toastify';
import headerBkg from '../../images/header-bkg.jpg';

export default function Navigation() {
  const [movies, setMovies] = useState([]);
  const [params, searchParams] = useSearchParams();
  const query = params.get('query');
  const [value, setValue] = useState(params.get('query') ?? '');
  const [prevQuery, setPrevQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (prevQuery && prevQuery !== query) {
      setMovies([]);
      setPage(1);
    }
    setPrevQuery(query);
  }, [query, prevQuery]);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    getMoviesByQuery(query, page)
      .then(newMovies => {
        setMovies(movies => [...movies, ...newMovies]);
      })
      .catch(error => toast.error(error))
      .finally(() => setLoading(false));
  }, [query, page]);

  function handleScroll() {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY + 400) >=
      document.documentElement.scrollHeight;

    if (bottom) {
      setPage(page => page + 1);
      console.log(1);
    }
  }
  console.log(2);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    searchParams({ query: e.target.query.value.trim(), page: 1 });
    setValue(e.target.query.value);
    setPage(1);
  };

  if (query) {
    return (
      <div>
        <div
          style={{
            backgroundImage: ` linear-gradient(to top, rgba(3, 20, 119, 0.4), rgba(4, 55, 173, 0.4)), url(${headerBkg})`,
            padding: '30px',
            marginBottom: '20px',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
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
        </div>
        <MovieList movies={movies} />
      </div>
    );
  } else {
    return (
      <div>
        <div
          style={{
            backgroundImage: ` linear-gradient(to top, rgba(3, 20, 119, 0.4), rgba(4, 55, 173, 0.4)), url(${headerBkg})`,
            padding: '30px',
            marginBottom: '20px',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
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
        </div>
        <Suspense fallback={<Spiner />}>
          <Outlet />
        </Suspense>
      </div>
    );
  }
}
