import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/API';
import { MagnifyingGlass } from 'react-loader-spinner';
import { toast } from 'react-toastify';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMovieReviews(id)
      .then(setReviews)
      .catch(error => toast.error(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <h2>Reviews</h2>
      {loading && <MagnifyingGlass />}
      <ul>
        {reviews.map(({ content, author, id }) => (
          <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
