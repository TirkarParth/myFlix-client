import React from 'react';
import { Card, Button } from 'react-bootstrap';


export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card style={{ width: '18rem' }} className="mb-3">
      <Card.Img variant="top" src={movie.imagePath[0]} alt={movie.title} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        {/* <Button variant="primary" onClick={onMovieClick}>
          View Details
        </Button> */}
      </Card.Body>
    </Card>
  );
};
