import Spiner from 'components/Spiner/spiner';
import { Suspense, useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { getMoviesDetailsById } from 'services/API';
import defaultImg from '../../images/movie-pic.jpg';
import {
  BackBtn,
  DetailsWrap,
  ImgDetails,
  NavLinkDetails,
} from './MovieDetails.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w400';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const { id } = useParams();

  const handleGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  useEffect(() => {
    getMoviesDetailsById(id).then(setMovie);
  }, [id]);

  if (!movie) {
    return <Spiner></Spiner>;
  }

  return (
    <div>
      <BackBtn type="button" onClick={handleGoBack}>
        Go back
      </BackBtn>
      <h2>{movie.title}</h2>
      <DetailsWrap>
        <ImgDetails
          src={
            movie.poster_path ? BASE_IMG_URL + movie.poster_path : defaultImg
          }
          alt={movie.title}
        />

        <p>{movie.overview}</p>
      </DetailsWrap>
      <NavLinkDetails state={{ from: location?.state?.from ?? '/' }} to="cast">
        Cast
      </NavLinkDetails>
      <NavLinkDetails
        state={{ from: location?.state?.from ?? '/' }}
        to="reviews"
      >
        Reviews
      </NavLinkDetails>
      <Suspense fallback={<Spiner></Spiner>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
