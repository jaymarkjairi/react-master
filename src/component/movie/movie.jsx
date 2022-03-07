import {movies} from '../data/movieData';
import MovieList from './MovieList/List';
import './MovieList/list.css';

const fetchMovieData = () => {
  return movies;
};

const MovieComponent = () => {
  const movieData = fetchMovieData();

  return (
    <div className="movie-container">
      <h2>Movies</h2>
      <ul className="movie-list">
        {movieData.map((movie) => (
          <MovieList key={movie.id} movie={movie} /> // props <movie> name must be the same
        ))}
      </ul>
    </div>
  );
};

export default MovieComponent;
