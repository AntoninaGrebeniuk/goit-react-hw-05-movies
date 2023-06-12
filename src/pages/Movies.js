import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Movies = () => {
  useEffect(() => {
    //
  });

  return (
    <div>
      {['movie-1', 'movie-2', 'movie-3', 'movie-4', 'movie-5'].map(movie => {
        return (
          <Link key={movie} to={`${movie}`}>
            {movie}
          </Link>
        );
      })}
    </div>
  );
};

export default Movies;
