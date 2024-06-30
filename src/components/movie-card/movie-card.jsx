import React from 'react';
import PropTypes from 'prop-types';
import './movie-card.scss';

export const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.imagePath[0]} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p><strong>Genre:</strong> {movie.genre.name}</p>
        <p><strong>Director:</strong> {movie.director.name}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imagePath: PropTypes.array.isRequired,
    genre: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired,
    director: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
