import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "./movie-card.scss";

export const MovieCard = ({ movie, onToggleFavorite }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite(movie.id, !isFavorite);
  };

  return (
    <Card
      className="movie-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
        <div className="image-container">
          <Card.Img
            variant="top"
            src={movie.image}
            className="movie-card-image"
          />
          {isHovered && (
            <div className="description-overlay">
              <Card.Text className="description-text">
                {movie.description}
              </Card.Text>
            </div>
          )}
        </div>
      </Link>
      <Card.Body>
        <Card.Title className="movieTitle">{movie.title}</Card.Title>
        <Card.Text className="movieGenre">{movie.genre.name}</Card.Text>
        <Button variant="primary" onClick={handleToggleFavorite}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};
