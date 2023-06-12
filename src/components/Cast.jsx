import { useParams } from 'react-router-dom';
const { useEffect } = require('react');

export const Cast = () => {
  const { movieId } = useParams();

  useEffect(() => {
    //
  });

  return <div>Cast {movieId}</div>;
};
