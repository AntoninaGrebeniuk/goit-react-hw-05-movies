import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'services/api';
import {
  Author,
  AuthorName,
  Content,
  InfoMessage,
  ReviewsItem,
  ReviewsList,
} from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        toast.error('Something went wrong. Please try again.');
      }
    };

    getReviews();
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <ReviewsList>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => {
          return (
            <ReviewsItem key={id}>
              <Author>
                Author: <AuthorName>{author}</AuthorName>
              </Author>
              <Content>{content}</Content>
            </ReviewsItem>
          );
        })
      ) : (
        <InfoMessage>
          Sorry, we don`t have any review for this movie.
        </InfoMessage>
      )}
    </ReviewsList>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};
