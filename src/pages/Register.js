import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import the CSS file for styling

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user'); // State for user type
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement register logic here based on userType
    // You can add your registration logic (e.g., API call) here
    navigate('/login'); // Redirect to login after successful registration
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2 className="register-title">Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="register-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="register-input"
        />
        <select value={userType} onChange={(e) => setUserType(e.target.value)} required className="register-select">
          <option value="user">User</option>
          <option value="developer">Developer</option>
        </select>
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
