import React from 'react';
import PropTypes from 'prop-types';
import './movie-view.scss';

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div className="movie-view">
      <div className="movie-poster">
        <img src={movie.imagePath[0]} alt={movie.title} />
      </div>
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <p><strong>Genre:</strong> {movie.genre.name}</p>
        <p><strong>Director:</strong> {movie.director.name}</p>
      </div>
      <button onClick={() => onBackClick(null)}>Back</button>
    </div>
  );
};

MovieView.propTypes = {
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
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};
