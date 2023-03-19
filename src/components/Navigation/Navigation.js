import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Spiner from 'services/spiner';

export default function Navigation() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Suspense fallback={<Spiner />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
