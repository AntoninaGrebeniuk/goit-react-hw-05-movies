import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getTrendingMovies } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const { total_results, results } = await getTrendingMovies();

        if (total_results === 0) {
          toast.warn('Nothing was found for your query. Please try again.');

          return;
        }

        setMovies(results);
      } catch (error) {
        toast.error('Something went wrong. Please try again.');
      }
    }
    getMovies();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
