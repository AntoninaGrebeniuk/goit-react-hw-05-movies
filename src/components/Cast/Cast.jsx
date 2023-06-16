import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getMovieCast } from '../../services/api';

export const Cast = () => {
  const { movieId } = useParams();

  useEffect(() => {
    //
  });

  return <div>Cast {movieId}</div>;
};

export default Cast;
