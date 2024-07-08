import PropTypes from "prop-types";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { movieid } = useParams();
  const movie = movies.find((b) => b.id === movieid);
  
  return (
    <div className="movie-view">
      <div className="movie-image-container">
        <img src={movie.image} className="movie-image" alt={movie.title} />
      </div>
      <div className="movie-details">
        <h2 className="movie-title">{movie.title}</h2>
        <div className="movie-info">
          <div>
            <span className="movie-header">Director: </span>
            <span>{movie.director.name}</span>
          </div>
          <div>
            <span className="movie-header">Bio: </span>
            <span>{movie.director.bio}</span>
          </div>
          <div>
            <span className="movie-header">Birthday: </span>
            <span>{movie.director.birth_year}</span>
          </div>
          <div>
            <span className="movie-header">Description: </span>
            <span>{movie.description}</span>
          </div>
          <div>
            <span className="movie-header">Genre: </span>
            <span>{movie.genre.name}</span>
          </div>
        </div>
        <Link to={`/`}>
          <button className="back-button">Back</button>
        </Link>
      </div>
    </div>
  );
};

MovieView.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      director: PropTypes.shape({
        name: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired,
        birth_year: PropTypes.string.isRequired,
      }).isRequired,
      description: PropTypes.string.isRequired,
      genre: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};
