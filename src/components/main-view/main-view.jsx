import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';
import { Row, Col, Container } from 'react-bootstrap'; // Import Bootstrap components
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
    fetch('https://radiant-lake-01596-6878ff7c62df.herokuapp.com/movies', {
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
        return response.json().then(err => {
          console.error('Fetch movie details error:', err);
          throw new Error('Failed to fetch movie details');
        });
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

  const getSimilarMovies = (genre) => {
    return movies.filter(movie => movie.genre.name === genre);
  };

  return (
    <Container>
      {!user ? (
        <Row className="justify-content-md-center">
          <Col md={5}>
            <LoginView onLoggedIn={(user, token) => { setUser(user); setToken(token); }} />
          </Col>
          <Col md={5}>
            <SignupView />
          </Col>
        </Row>
      ) : (
        <>
          <Row className="justify-content-md-center">
            <Col md={25}>
              <header>
                <h1>Welcome, {user.Username}!</h1>
                <button onClick={handleLogout}>Logout</button>
              </header>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md={10}>
              <section className="movies-section">
                <h2>Movie List</h2>
                {error && <div className="error">{error}</div>}
                <Row>
                  {movies.length === 0 ? (
                    <div>The movie list is empty!</div>
                  ) : (
                    movies.map(movie => (
                      <Col md={4} key={movie._id}>
                        <MovieCard movie={movie} onMovieClick={() => fetchMovieDetails(movie._id)} />
                      </Col>
                    ))
                  )}
                </Row>
              </section>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md={3}>
              {selectedMovie && (
                <MovieView
                  movie={selectedMovie}
                  onBackClick={() => setSelectedMovie(null)}
                  similarMovies={getSimilarMovies(selectedMovie.Genre.Name)}
                />
              )}
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};
