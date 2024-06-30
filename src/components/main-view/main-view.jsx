import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';
import './main-view.scss';

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [error, setError] = useState('');
  
    useEffect(() => {
      if (token) {
        fetchMovies();
      }
    }, [token]);
  
    const fetchMovies = () => {
      fetch('https://radiant-lake-01596-6878ff7c62df.herokuapp.com/movies', {  //YOUR_MOVIES_ENDPOINT
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        return response.json();
      })
      .then(data => {
        setMovies(data);
        setError('');
      })
      .catch(error => {
        console.error('Fetch movies error:', error);
        setError('Failed to fetch movies. Please try again.');
      });
    };
  
    const handleLogout = () => {
      setUser(null);
      setToken(null);
      localStorage.clear();
    };
  
    const fetchMovieDetails = (movieId) => {
      fetch(`https://radiant-lake-01596-6878ff7c62df.herokuapp.com/movies/${movieId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }
        return response.json();
      })
      .then(data => {
        setSelectedMovie(data);
        setError('');
      })
      .catch(error => {
        console.error('Fetch movie details error:', error);
        setError('Failed to fetch movie details. Please try again.');
      });
    };
  
    return (
      <div className="main-view">
        {!user ? (
          <>
            <LoginView onLoggedIn={(user, token) => { setUser(user); setToken(token); }} />
            <SignupView />
          </>
        ) : (
          <>
            <header>
              <h1>Welcome, {user.Username}!</h1>
              <button onClick={handleLogout}>Logout</button>
            </header>
            <section className="movies-section">
              <h2>Movie List</h2>
              {error && <div className="error">{error}</div>}
              <div className="movie-list">
                {movies.length === 0 ? (
                  <div>The movie list is empty!</div>
                ) : (
                  movies.map(movie => (
                    <MovieCard key={movie._id} movie={movie} onMovieClick={() => fetchMovieDetails(movie._id)} />
                  ))
                )}
              </div>
            </section>
            {selectedMovie && (
              <MovieView movie={selectedMovie} />
            )}
          </>
        )}
      </div>
    );
  };
