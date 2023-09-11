import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = useCallback(() => {
    setIsLoading(true);

    fetch('https://swapi.dev/api/films')
      .then((response) => {
        return response.json();
      })
      .then((data) => {    
        const movies = data.results.map((item, index) => ({
          id: index,
          title: item.title,
          openingText: item['opening_crawl'],
          releaseDate: item['release_date']
        }));

        setMovies(movies);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);  

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const moviesList = movies && movies.length > 0 
    ? (
      <MoviesList movies={movies}/>
    )
    : (
      <h2>There are no movies to display!</h2>
    )

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && moviesList}
        {isLoading && <h2>Loading...</h2>}
      </section>
    </React.Fragment>
  );
}

export default App;
