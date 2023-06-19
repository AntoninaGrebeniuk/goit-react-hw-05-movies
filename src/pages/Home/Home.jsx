import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getTrendingMovies } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';
import { Title } from '../../components/Title/Title';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const { total_results, results } = await getTrendingMovies();

        if (total_results === 0) {
          toast.warn('Something went wrong. Please try reload page.');

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
      <Title />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
