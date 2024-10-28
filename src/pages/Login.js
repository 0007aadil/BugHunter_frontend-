import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file for styling

const Login = ({ onLogin }) => { // Accept onLogin as a prop
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user'); // State for user type
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Implement login logic here (e.g., API call)
    if (username && password) { // Add your actual authentication logic
      onLogin(userType, username); // Call the onLogin function with userType and username
      navigate(userType === 'developer' ? '/developer-dashboard' : '/dashboard'); // Redirect based on user type
    } else {
      alert('Invalid credentials'); // Handle invalid credentials
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />
        <select value={userType} onChange={(e) => setUserType(e.target.value)} required className="login-select">
          <option value="user">User</option>
          <option value="developer">Developer</option>
        </select>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
