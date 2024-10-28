import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import './Dashboard.css'; // Import the CSS file for additional styles

const Dashboard = ({ userType, developerName, onLogout }) => {
  const [doubt, setDoubt] = useState('');
  const [doubts, setDoubts] = useState([]);
  const [solution, setSolution] = useState('');
  const [selectedDoubt, setSelectedDoubt] = useState(null);
  const [solutions, setSolutions] = useState([]);
  const [ratings, setRatings] = useState({});
  const navigate = useNavigate();

  const handleDoubtSubmit = (e) => {
    e.preventDefault();
    if (doubt.trim()) {
      const newDoubt = { text: doubt, developer: developerName };
      setDoubts((prevDoubts) => [...prevDoubts, newDoubt]);
      setDoubt('');
    }
  };

  const handleSolveDoubt = (e) => {
    e.preventDefault();
    if (solution.trim() && selectedDoubt) {
      const newSolution = {
        doubt: selectedDoubt.text,
        solution: solution,
        developer: developerName,
        rating: 0,
      };
      setSolutions((prevSolutions) => [...prevSolutions, newSolution]);
      setSelectedDoubt(null);
      setSolution('');
    }
  };

  const handleRating = (solutionIndex, rating) => {
    const newRatings = { ...ratings, [solutionIndex]: rating };
    setRatings(newRatings);

    const updatedSolutions = [...solutions];
    if (rating > 0) {
      updatedSolutions[solutionIndex].rating += rating;
    }
    setSolutions(updatedSolutions);
  };

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <button className="logout-button" onClick={handleLogout}>
        <i className="fas fa-sign-out-alt"></i> Logout
      </button>
      <h2 className="dashboard-title">
        {userType === 'developer' ? 'Developer Dashboard' : 'User Dashboard'}
      </h2>
      <h3 className="welcome-message">Welcome, {developerName}!</h3>
      <h4 className="points-info">Your Points: {solutions.reduce((acc, s) => acc + s.rating, 0) * 10}</h4>

      {/* Doubt Submission Section for Users */}
      {userType !== 'developer' && (
        <form className="doubt-form" onSubmit={handleDoubtSubmit}>
          <h3>Create a Doubt</h3>
          <input
            type="text"
            placeholder="Enter your doubt"
            value={doubt}
            onChange={(e) => setDoubt(e.target.value)}
            required
          />
          <button type="submit">
            <i className="fas fa-paper-plane"></i> Submit Doubt
          </button>
        </form>
      )}

      {/* Submitted Doubts Section */}
      <h3>Submitted Doubts</h3>
      <ul className="doubt-list">
        {doubts.length > 0 ? (
          doubts.map((item, index) => (
            <li key={index} className="doubt-item">
              {item.text} (Submitted by: {item.developer})
              {userType === 'developer' && (
                <button className="solve-button" onClick={() => setSelectedDoubt(item)}>
                  <i className="fas fa-check-circle"></i> Solve
                </button>
              )}
            </li>
          ))
        ) : (
          <li>No doubts submitted yet.</li>
        )}
      </ul>

      {/* Solution Submission Section for Developers */}
      {selectedDoubt && userType === 'developer' && (
        <form className="solution-form" onSubmit={handleSolveDoubt}>
          <h3>Solve Doubt: {selectedDoubt.text}</h3>
          <input
            type="text"
            placeholder="Enter your solution"
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            required
          />
          <button type="submit">
            <i className="fas fa-check"></i> Submit Solution
          </button>
        </form>
      )}

      {/* Display Solutions */}
      <h3>Solutions</h3>
      <ul className="solution-list">
        {solutions.length > 0 ? (
          solutions.map((s, index) => (
            <li key={index} className="solution-item">
              <strong>Solution:</strong> {s.solution} <br />
              <strong>Developer:</strong> {s.developer} <br />
              <strong>Rating:</strong> {s.rating} <br />
              {userType === 'user' && (
                <div>
                  <label htmlFor={`rating-${index}`}>Rate this solution:</label>
                  <select
                    id={`rating-${index}`}
                    onChange={(e) => handleRating(index, parseInt(e.target.value))}
                  >
                    <option value="0">Rate...</option>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
              )}
            </li>
          ))
        ) : (
          <li>No solutions available.</li>
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
