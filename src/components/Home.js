import React from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to BugHunter</h2>
      <p className="home-description">A platform to post and solve bugs efficiently!</p>

      <h3 className="features-title">Features</h3>
      <ul className="features-list">
        <li>👥 Community-driven bug tracking</li>
        <li>🔍 Powerful search functionality</li>
        <li>💬 Real-time collaboration and discussions</li>
        <li>📊 Analytics for tracking bug resolutions</li>
        <li>📧 Notifications for updates and changes</li>
      </ul>

      <h3 className="testimonials-title">What Our Users Say</h3>
      <div className="testimonial">
        <p>
          "BugHunter has completely transformed the way we handle bugs in our project! The community support is amazing!" 
          <br />
          - <strong>Garvit Saini, Developer</strong>
        </p>
      </div>
      
      <div className="testimonial">
        <p>
          "I love the collaborative features of BugHunter! It makes it so easy to communicate with my team." 
          <br />
          - <strong>Piyush Kumar, Project Manager</strong>
        </p>
      </div>
    </div>
  );
};

export default Home;
