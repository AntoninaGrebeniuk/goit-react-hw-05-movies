import { useParams } from 'react-router-dom';
const { useEffect } = require('react');

export const Reviews = () => {
  const { movieId } = useParams();

  useEffect(() => {
    //
  });

  return <div>Reviews {movieId}</div>;
};
