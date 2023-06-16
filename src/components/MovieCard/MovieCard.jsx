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
  const votes = vote_average.toFixed(1);
  const genresList = genres?.map(({ name }) => name).join(', ');

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title ?? name}
          loading="lazy"
        />
        <div>{votes}</div>
      </div>
      <ul>
        <li>
          <h2>{title}</h2>
          <p>{releaseDate}</p>
        </li>
        <li>
          <h3>Overview</h3>
          <p>{overview}</p>
        </li>
        <li>
          <h3>Genres</h3>
          <p>{genresList}</p>
        </li>
      </ul>
    </div>
  );
};
