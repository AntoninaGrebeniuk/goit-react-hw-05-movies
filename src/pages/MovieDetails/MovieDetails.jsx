import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { getMovieDetails } from 'services/api';
import { toast } from 'react-toastify';
import { MovieCard } from 'components/MovieCard/MovieCard';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState('');
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const getInfo = async () => {
      try {
        const data = await getMovieDetails(movieId);

        setMovieDetails(data);
      } catch (error) {
        toast.error('Something went wrong. Please try again.');
      }
    };
    getInfo();

    // getMovieDetails(movieId).then(setMovieDetails);
  }, [movieId]);

  if (!movieDetails) {
    return;
  }

  return (
    <>
      <Link to={location.state} type="button">
        &#129044; Go back
      </Link>
      <MovieCard movie={movieDetails} />

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
