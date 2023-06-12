import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../services/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const { total_results, results } = await getTrendingMovies();
        // const results = await data.results;

        console.log(results);
        // console.log(data);

        if (total_results === 0) {
          //  toast.warn('Something went wrong. Please try again.');
          //  setIsLoading(STATUS.RESOLVED);
          console.log('Oops!');
          return;
        }

        setTrendingMovies(results);

        //  setIsLoading(STATUS.RESOLVED);
      } catch (error) {
        //  errorMessage();
        //  setIsLoading(STATUS.REJECTED);
      }
    }
    getMovies();
  }, []);

  return (
    <div>
      <ul>
        {trendingMovies.map(
          ({
            title,
            id,
            name,
            release_date,
            vote_average,
            poster_path,
            genre_ids,
          }) => {
            return (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title || name}
                  loading="lazy"
                />

                <div>
                  <h2>{title || name}</h2>
                  <ul>
                    <li>{genre_ids}</li>

                    <li>{release_date}</li>
                  </ul>
                  <span>
                    {vote_average}
                    {/* <div>
                      <div>
                        <div></div>
                        <div>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            step="0.1"
                            // class="rating__item"
                            // value={vote_average}
                            name="rating"
                          />
                        </div>
                      </div>
                    </div> */}
                  </span>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Home;
