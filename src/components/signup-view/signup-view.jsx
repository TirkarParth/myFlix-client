import React, { useState } from 'react';
import './signup-view.scss'; // Add your styles here

export const SignupView = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!username || !password || !email || !birthday) {
        setError('Please fill out all fields');
        return;
      }
  
      const data = {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday
      };
  
      fetch('https://radiant-lake-01596-6878ff7c62df.herokuapp.com/users', { //YOUR_SIGNUP_ENDPOINT
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Content-Type header to specify JSON format
            'Content-Length': JSON.stringify(data).length, // Content-Length header
            'User-Agent': 'PostmanRuntime/7.39.0', // User-Agent header
            'Accept': '*/*', // Accept header
            'Accept-Encoding': 'gzip, deflate, br', // Accept-Encoding header
            'Connection': 'keep-alive' // Connection header
          },
        body: JSON.stringify(data) // Stringify the data to ensure it's in JSON format
      })
      
      .then(response => response.json())
      .then(data => {
        if (data && data.Username) {
          alert('Signup successful! Please log in.');
          // Redirect or handle signup success
          window.location.href = '/login'; // Redirect to the login page
        } else if (text.includes('<html>')) {
            throw new Error('Username already exists');
          } else {
            setError('Signup failed. Please try again.');
          }
        })
    
      .catch(error => {
        console.error('Signup error:', error);
        setError('Signup failed. Please try again later.');
      });
  };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Sign Up for MyFlix</h2>
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
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Birthday:
          <input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    );
  };
