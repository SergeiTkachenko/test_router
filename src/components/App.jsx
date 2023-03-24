import { Container } from './style/Container';
import { GlobalStyle } from './style/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import { useEffect, useState } from 'react';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Navigation from './Navigation/Navigation';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import TopRatedMovies from 'pages/TopRatedMovies';
import PopularMovies from 'pages/PopularMovies';
import UpcomingMovies from 'pages/UpcomingMovies';
import { UpBtn } from './style/UpBtn';

export default function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      setShowButton(top > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClickUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/top_movies" element={<TopRatedMovies />} />
          <Route path="/popular" element={<PopularMovies />} />
          <Route path="/upcoming" element={<UpcomingMovies />} />
          {/* <Route path="/movies" element={<Movies />} /> */}
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      {showButton && <UpBtn onClick={handleClickUp}>UP</UpBtn>}
      <GlobalStyle />
    </Container>
  );
}
