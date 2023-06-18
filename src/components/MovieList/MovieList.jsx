import { Link, useLocation } from 'react-router-dom';
import { CircularRating } from '../CircularProgressbar/CircularProgressbar';
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
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <ImgWrap>
                <Img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : `https://www.ormistonhospital.co.nz/wp-content/uploads/2016/05/No-Image.jpg`
                  }
                  alt={title ?? name}
                  loading="lazy"
                />
              </ImgWrap>

              <Votes>
                <CircularRating rating={voteScore} />
              </Votes>
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
