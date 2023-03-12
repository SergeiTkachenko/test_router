import { Layout } from './style/Layout';
import { GlobalStyle } from './style/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Navigation from './Navigation/Navigation';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </Layout>
  );
}
