import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Spiner from 'services/spiner';
import { NavigationStyled, NavLinkStyled } from './Navigation.styled';

export default function Navigation() {
  return (
    <div>
      <NavigationStyled>
        <NavLinkStyled to="/">Trending movies</NavLinkStyled>
        <NavLinkStyled to="/top_movies">Top rated</NavLinkStyled>
        <NavLinkStyled to="/movies">Serch movies</NavLinkStyled>
      </NavigationStyled>
      <Suspense fallback={<Spiner />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
