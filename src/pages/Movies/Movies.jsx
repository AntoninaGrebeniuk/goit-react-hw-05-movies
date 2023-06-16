import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSearchMovies } from 'services/api';
import { toast } from 'react-toastify';
import { MovieList } from 'components/MovieList/MovieList';
import { SearchBar } from 'components/SearchBar/SearchBar';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (query === '') return;

    async function searchMovie() {
      try {
        const { results } = await getSearchMovies(query);

        setMovies(results);
      } catch (err) {
        toast.warn('Something went wrong. Please try again.');
        console.log(err.message);
      }
    }
    searchMovie();
  }, [searchParams]);

  const onChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.info("Sorry, the search string can't be empty. Please try again.");
      return;
    }

    setSearchParams(query !== '' ? { query } : {});
    setQuery('');
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} onChange={onChange} />
      <MovieList movies={movies} />
    </>
  );
};

export default Movies;
