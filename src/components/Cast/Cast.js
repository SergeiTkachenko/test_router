import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/API';
import { MagnifyingGlass } from 'react-loader-spinner';
import { toast } from 'react-toastify';

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
      <h2>Cast</h2>
      {loading && <MagnifyingGlass />}
      <ul>
        {cast.map(({ profile_path, name, character, cast_id }) => (
          <li key={cast_id}>
            <img src={BASE_IMG_URL + profile_path} alt={name} />
            <h3>{name}</h3>
            <h4>As: {character}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}
