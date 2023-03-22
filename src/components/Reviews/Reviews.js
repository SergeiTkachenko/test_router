import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/API';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getMovieReviews(id).then(setReviews);
  }, [id]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(({ content, author, id }) => (
          <li key={id}>
            <h2>{author}</h2>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
