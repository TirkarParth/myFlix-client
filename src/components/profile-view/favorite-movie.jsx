import React from "react";
import { Row, Col } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";

export const FavoriteMovies = ({ movies, user, onToggleFavorite }) => {
  if (!movies || !user || !user.FavoriteMovies) {
    return <div>No favorite movies available</div>;
  }

  const favoriteMovies = movies.filter((movie) =>
    user.FavoriteMovies.includes(movie._id)
  );

  return (
    <div>
      <h2>Favorite Movies</h2>
      <Row>
        {favoriteMovies.map((movie) => (
          <Col key={movie._id} xs={12} sm={6} md={4} lg={3}>
            <MovieCard
              movie={movie}
              onToggleFavorite={onToggleFavorite}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
