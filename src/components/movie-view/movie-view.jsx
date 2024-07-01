import React from 'react';
import { Row, Col, Button, Card, Container } from 'react-bootstrap'; // Import Bootstrap components

export const MovieView = ({ movie, onBackClick }) => {
    return (
        <Container className="movie-view">
            <Row className="justify-content-md-center">
                <Col md={8}>
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title className="movie-title">
                                <h2>{movie.title}</h2>
                            </Card.Title>
                            <Card.Text className="movie-description">
                                {movie.description}
                            </Card.Text>
                            <Card.Text className="movie-director">
                                <strong>Director:</strong> {movie.director}
                            </Card.Text>
                            <Card.Text className="movie-genre">
                                <strong>Genre:</strong> {movie.genre}
                            </Card.Text>
                            <div className="movie-image">
                                <img src={movie.imagePath} alt={movie.title} className="img-fluid" />
                            </div>
                            <Button variant="primary" onClick={onBackClick} className="mt-3">Back</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
