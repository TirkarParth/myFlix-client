import React, { useState, useEffect } from 'react';
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import './main-view.scss';

export const MainView = () => {
    const [movies, setMovies] = useState([]);
    /**
        {
            id: 1,
            title: "The Dark Knight",
            image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/The_Dark_Knight_Batman.jpg",
            director: "Christopher Nolan",
            description: "A gritty and grounded superhero movie.",
            genre: "Action"
        },
        {
            id: 2,
            title: "Rush Hour",
            image: "https://m.media-amazon.com/images/I/61kGlPSpkKL._AC_UF894,1000_QL80_.jpg",
            director: "Brett Ratner",
            description: "A tale of a powerful mafia family.",
            genre: "Action Comedy"
        },
        {
            id: 3,
            title: "Inception",
            image: "https://m.media-amazon.com/images/I/912AErFSBHL._AC_UF894,1000_QL80_.jpg",
            director: "Christopher Nolan",
            description: "A mind-bending journey through dreams.",
            genre: "Sci-Fi"
        },
        {
            id: 4,
            title: "Spirited Away",
            image: "https://m.media-amazon.com/images/I/710ievVCTTL._AC_UF894,1000_QL80_.jpg",
            director: "Hayao Miyazaki",
            description: "A series of interconnected crime stories.",
            genre: "Drama"
        }
    ]);
    */

    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        fetch("https://moviesdb-6abb3284c2fb.herokuapp.com/movies")
            .then((response) => response.json())
            .then((movies) => {
                const moviesApi = movies.map((movie) => ({
                    id: movie._id,
                    title: movie.title,
                    description: movie.description,
                    imagePath: movie.imagePath[0],
                    genre: movie.genre.name,
                    director: movie.director.name,
                }));
                setMovies(moviesApi);
            });
    }, []);

    if (selectedMovie) {
        const similarMovies = movies.filter(
            (movie) => movie.genre === selectedMovie.genre && movie.id !== selectedMovie.id
        );

        return (
            <div>
                <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
                <hr />
                <h2>Similar Movies</h2>
                <div className="similar-movies">
                    {similarMovies.map((movie) => (
                        <div key={movie.id} className="similar-movie-card" onClick={() => setSelectedMovie(movie)}>
                            {movie.title}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <div className="main-view">
            <h1>Movie List</h1>
            <div className="movie-list">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-card" onClick={() => setSelectedMovie(movie)}>
                        {movie.title}
                    </div>
                ))}
            </div>
        </div>
    );
};
