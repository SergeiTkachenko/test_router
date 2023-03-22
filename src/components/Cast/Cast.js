import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/API';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getMovieCast(id).then(setCast);
  }, [id]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(({ profile_path, name, character, cast_id }) => (
          <li key={cast_id}>
            <img src={BASE_IMG_URL + profile_path} alt={name} />
            <p>{name}</p>
            <p>As: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
