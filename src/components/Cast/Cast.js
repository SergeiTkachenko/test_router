import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/API';

import { toast } from 'react-toastify';
import Spiner from 'components/Spiner/spiner';
import { CastItemStyled, CastListStyled } from './CastStyled';
import defaultImg from '../../images/movie-pic.jpg';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getMovieCast(id)
      .then(setCast)
      .catch(error => toast.error(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      {loading && <Spiner></Spiner>}
      <CastListStyled>
        {cast.map(({ profile_path, name, character, cast_id }) => (
          <CastItemStyled key={cast_id}>
            <img
              src={profile_path ? BASE_IMG_URL + profile_path : defaultImg}
              alt={name}
            />
            <h3>{name ? name : 'No name'}</h3>
            <h4>As: {character ? character : 'No characrer name'}</h4>
          </CastItemStyled>
        ))}
      </CastListStyled>
    </div>
  );
}
