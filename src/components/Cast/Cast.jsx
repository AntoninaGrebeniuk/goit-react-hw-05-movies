import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCast } from '../../services/api';
import {
  CastItem,
  CastList,
  Character,
  CharacterName,
  ImgBox,
  ImgCast,
  Name,
  TextBox,
} from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const { cast } = await getMovieCast(movieId);

        setCast(cast);
      } catch (error) {
        toast.error('Something went wrong. Please try again.');
      }
    };

    getCast();
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <CastList>
      {cast.map(({ name, id, character, profile_path }) => {
        return (
          <CastItem key={id}>
            <ImgBox>
              <ImgCast
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : `https://icon-library.com/images/no-photo-available-icon/no-photo-available-icon-10.jpg`
                }
                alt={name}
              />
            </ImgBox>
            <TextBox>
              <Name>{name}</Name>
              <Character>Character:</Character>
              <CharacterName>{character}</CharacterName>
            </TextBox>
          </CastItem>
        );
      })}
    </CastList>
  );
};

export default Cast;

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    })
  ),
};
