import React, { useState } from 'react';
// import './login-view.scss'; // Import your SCSS styles here
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError('Please enter username and password');
      return;
    }

    const data = {
      Username: username,
      Password: password
    };

    // Replace 'LOGIN_URL' with your actual login endpoint
    fetch('https://radiant-lake-01596-6878ff7c62df.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data && data.token) {
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        onLoggedIn(data.user, data.token);
      } else {
        setError('Invalid username or password');
      }
    })
    .catch(error => {
      console.error('Login error:', error);
      setError('Login failed. Please try again later.');
    });
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h1>Login</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Enter your username"
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
