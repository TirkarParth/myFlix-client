// src/components/login-view/login-view.jsx

import React, { useState } from 'react';

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
    fetch('https://radiant-lake-01596-6878ff7c62df.herokuapp.com/login', { //LOGIN_URL
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
    <form onSubmit={handleSubmit}>
      <h2>Login to myFlix</h2>
      {error && <div className="error">{error}</div>}
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};
