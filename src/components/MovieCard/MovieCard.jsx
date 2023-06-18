import { CircularRating } from 'components/CircularProgressbar/CircularProgressbar';
import {
  Box,
  CardOverview,
  CardSubTitle,
  CardText,
  CardTitle,
  DescCard,
  DescCardItem,
  Img,
  ImgWrapper,
  Title,
  VotesCard,
} from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
  const {
    title,
    name,
    vote_average,
    release_date,
    poster_path,
    genres,
    overview,
  } = movie;

  const releaseDate = release_date.slice(0, 4);
  const voteScore = vote_average.toFixed(1);
  const genresList = genres?.map(({ name }) => name).join(', ');

  return (
    <Box>
      <ImgWrapper>
        <Img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://www.ormistonhospital.co.nz/wp-content/uploads/2016/05/No-Image.jpg`
          }
          alt={title ?? name}
          loading="lazy"
        />
        <VotesCard>
          <CircularRating rating={voteScore} />
        </VotesCard>
      </ImgWrapper>
      <DescCard>
        <Title>
          <CardTitle>
            {title} &#40;{releaseDate}&#41;
          </CardTitle>
          {/* <ReleaseDate>&#40;{releaseDate}&#41;</ReleaseDate> */}
        </Title>
        <CardOverview>
          <CardSubTitle>Overview:</CardSubTitle>
          <CardText>{overview}</CardText>
        </CardOverview>
        <DescCardItem>
          <CardSubTitle>Genres:</CardSubTitle>
          <CardText>{genresList}</CardText>
        </DescCardItem>
      </DescCard>
    </Box>
  );
};
