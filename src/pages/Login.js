// src/pages/Login.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../pages/AuthContext'; // Context for storing user data
import '../styles/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSignup, setShowSignup] = useState(false); // Toggle between Login and Signup forms
  const { setUserDetails } = useContext(AuthContext); // Access setUserDetails directly
  const navigate = useNavigate();

  // Handle form submission for login or signup
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation for login
    if (!showSignup && email && password.length >= 6) {
      setUserDetails({ email, password });
      alert('Login Successful!');
      navigate('/admin'); // Redirect to admin panel
    }

    // Form validation for signup
    if (showSignup) {
      if (password !== confirmPassword) {
        alert("Passwords don't match.");
        return;
      }
      if (email && password.length >= 6) {
        setUserDetails({ email, password });
        alert('Signup Successful!');
        setShowSignup(false); // Switch to login view after signup
      }
    } else {
      alert('Please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <h2>{showSignup ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Confirm password field for signup */}
        {showSignup && (
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}

        <button type="submit">{showSignup ? 'Sign Up' : 'Login'}</button>
      </form>

      {/* Toggle between Login and Signup */}
      <p>
        {showSignup ? (
          <>
            Already have an account?{' '}
            <button onClick={() => setShowSignup(false)}>Login here</button>
          </>
        ) : (
          <>
            Don't have an account?{' '}
            <button onClick={() => setShowSignup(true)}>Sign up here</button>
          </>
        )}
      </p>
    </div>
  );
}

export default Login;
