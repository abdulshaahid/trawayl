import React, { useState } from 'react';
import axios from 'axios';

const UserLogin = () => {
  // State for form fields and error handling
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Send POST request to get JWT tokens
      const response = await axios.post('http://127.0.0.1:8000/api/token/', {
        email,
        password,
      });

      // If successful, save tokens to localStorage
      localStorage.setItem('useraccesstoken', response.data.access);
      localStorage.setItem('userrefreshtoken', response.data.refresh);

      // Clear the error message in case of successful login
      setErrorMessage('');

      // Redirect user to dashboard or home (optional)
      // window.location.href = '/dashboard';  // Example redirect

      console.log('Login successful!');
    } catch (error) {
      // Handle errors (e.g., invalid credentials)
      if (error.response) {
        setErrorMessage(error.response.data.error || 'Login failed');
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              style={styles.input}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              style={styles.input}
            />
          </div>
          <div>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </div>
          <div>
            <button type="submit" style={styles.button}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};

export default UserLogin;
