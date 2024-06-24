import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
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

    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
        return (
            <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        );
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                    }}
                />
            ))}
        </div>
    );
};
