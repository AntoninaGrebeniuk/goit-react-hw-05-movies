import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import { getMovieDetails } from 'services/api';
import { toast } from 'react-toastify';
import { MovieCard } from 'components/MovieCard/MovieCard';
import {
  ArrowLeft,
  BtnInfoList,
  CastBtn,
  GoBack,
  InfoBlock,
  ReviewsBtn,
  Text,
  TitleInfo,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const BackLinkLocationRef = useRef(location.state?.from ?? '/home');

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
      <GoBack to={BackLinkLocationRef.current} type="button">
        <Text>
          <ArrowLeft />
          Go back
        </Text>
      </GoBack>

      <MovieCard movie={movieDetails} />

      <InfoBlock>
        <TitleInfo>Additional Information</TitleInfo>
        <BtnInfoList>
          <li>
            <CastBtn to="cast" state={location}>
              <Text>Cast</Text>
            </CastBtn>
          </li>
          <li>
            <ReviewsBtn to="reviews" state={location}>
              <Text>Reviews</Text>
            </ReviewsBtn>
          </li>
        </BtnInfoList>
      </InfoBlock>

      <Suspense fallback={<div>LOADING...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
