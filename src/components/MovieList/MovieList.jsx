import { Link, useLocation } from 'react-router-dom';
import {
  CardItem,
  CardList,
  CardTitle,
  Img,
  ImgWrap,
  TextWrap,
  Votes,
} from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <CardList>
      {movies.map(({ title, id, name, vote_average, poster_path }) => {
        const voteScore = vote_average.toFixed(1);
        return (
          <CardItem key={id}>
            <Link to={`/movies/${id}`} state={location}>
              <ImgWrap>
                <Img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title ?? name}
                  loading="lazy"
                />
              </ImgWrap>

              <Votes>{voteScore}</Votes>
              <TextWrap>
                <CardTitle>{title ?? name}</CardTitle>
              </TextWrap>
            </Link>
          </CardItem>
        );
      })}
    </CardList>
  );
};
