import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/API';
import { toast } from 'react-toastify';
import Spiner from 'components/Spiner/spiner';
import { ReviewsItemStyled, ReviewsListStyled } from './Reviws.styled';

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
      {loading && <Spiner></Spiner>}
      <ReviewsListStyled>
        {reviews.map(({ content, author, id }) => (
          <ReviewsItemStyled key={id}>
            <h3>{author}</h3>
            <div style={{ wordWrap: 'break-word' }}>{content}</div>
          </ReviewsItemStyled>
        ))}
      </ReviewsListStyled>
    </div>
  );
}
