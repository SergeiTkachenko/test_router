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

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const BASE_IMG_URL_ORIGINAL = 'https://image.tmdb.org/t/p/original';

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
  // backdrop_path
  console.log(movie);
  return (
    <div>
      <div
        style={{
          backgroundImage: ` linear-gradient(to top, rgba(14, 48, 241, 0.3), rgba(117, 141, 199, 0.4)), url(${
            BASE_IMG_URL_ORIGINAL + movie.backdrop_path
          })`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          height: '100%',
          width: '100%',
          padding: '10px',
        }}
      >
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

          <p
            style={{
              backgroundColor: 'rgba(77, 101, 161, 0.7)',
              height: '100%',
              padding: '10px',
            }}
          >
            {movie.overview}
          </p>
        </DetailsWrap>

        <NavLinkDetails
          state={{ from: location?.state?.from ?? '/' }}
          to="cast"
        >
          Cast
        </NavLinkDetails>
        <NavLinkDetails
          state={{ from: location?.state?.from ?? '/' }}
          to="reviews"
        >
          Reviews
        </NavLinkDetails>
        {/* <NavLinkDetails
          state={{ from: location?.state?.from ?? '/' }}
          to="reviews"
        >
          Treiler
        </NavLinkDetails> */}
      </div>
      <Suspense fallback={<Spiner></Spiner>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
