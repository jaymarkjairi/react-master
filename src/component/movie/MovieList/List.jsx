const Movie = ({movie}) => {
  return (
    <li className="movie" key={movie.id}>
      <h3> {movie.title}</h3>
      <img src={movie.poster} alt={movie.title} />
      <p>
        By {movie.director} was released on {movie.year}
      </p>
      <p>Rating: {movie.rating}</p>
    </li>
  );
};

export default Movie;
