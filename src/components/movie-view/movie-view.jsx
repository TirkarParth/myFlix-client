import React from "react";
import "./movie-view.scss";  // Add CSS file for styling

export const MovieView = ({ movie, onBackClick }) => {
    return (
        <div className="movie-view">
            <button onClick={onBackClick}>Back</button>
            <h1>{movie.title}</h1>
            <img src={movie.image} alt={movie.title} />
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Description:</strong> {movie.description}</p>
        </div>
    );
};
