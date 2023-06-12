import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();

  useEffect(() => {
    // const controller = new AbortController();
    // axios
    //   .get('/foo/bar', {
    //     signal: controller.signal,
    //   })
    //   .then(function (response) {
    //     //...
    //   });
    // // отмена запроса
    // controller.abort();
  }, []);

  return (
    <>
      <h1>MovieDetails</h1>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
