import React from 'react';
import PropTypes from 'prop-types';
import './movie-card.scss';

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <div className="movie-card" onClick={() => onMovieClick(movie)}>
            {movie.title}
        </div>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        imagePath: PropTypes.string,
        genre: PropTypes.string,
        director: PropTypes.string
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};
