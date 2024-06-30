import React from "react";
import "./movie-view.scss";  // Add CSS file for styling
import PropTypes from 'prop-types';

export const MovieView = ({ movie, onBackClick }) => {
    return (
        <div className="movie-view">
            <div className="movie-title">
                <h2>{movie.title}</h2>
            </div>
            <div className="movie-description">
                <p>{movie.description}</p>
            </div>
            <div className="movie-director">
                <p>Director: {movie.director}</p>
            </div>
            <div className="movie-genre">
                <p>Genre: {movie.genre}</p>
            </div>
            <div className="movie-image">
                <img src={movie.imagePath} alt={movie.title} />
            </div>
            <button onClick={onBackClick}>Back</button>
        </div>
    );
};

MovieView.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        imagePath: PropTypes.string.isRequired
    }).isRequired,
    onBackClick: PropTypes.func.isRequired
};