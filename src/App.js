import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext';
import '@fortawesome/fontawesome-free/css/all.css';


const App = () => {
  const [userType, setUserType] = useState(null); // Track user type
  const [developerName, setDeveloperName] = useState(''); // Track developer name

  const handleLogin = (type, name) => {
    setUserType(type);
    setDeveloperName(name);
  };

  const handleLogout = () => {
    setUserType(null);
    setDeveloperName('');
  };

  // Protected Route Component
  const ProtectedRoute = ({ element }) => {
    return userType ? element : <Navigate to="/login" />;
  };

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard userType={userType} developerName={developerName} onLogout={handleLogout} />} />} />}
          <Route path="/developer-dashboard" element={<ProtectedRoute element={<Dashboard userType="developer" developerName={developerName} onLogout={handleLogout} />} />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
