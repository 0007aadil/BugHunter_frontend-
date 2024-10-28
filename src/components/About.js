import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About BugHunter</h2>
      <p className="about-description">
        BugHunter is a community-driven platform for tracking and solving bugs!
      </p>

      <h3 className="section-title">Meet Our Team</h3>
      <div className="team-members">
        <div className="team-member">
          <h4>Aadil</h4>
          <p>A passionate developer dedicated to building solutions that improve efficiency and collaboration.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/aadil" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin social-icon" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/aadil" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github social-icon" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="team-member">
          <h4>Ankit</h4>
          <p>An innovative thinker focused on creating user-friendly applications that simplify complex processes.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/ankit-kumar-2b4a4b28b/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin social-icon" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/kr_ankit07/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram social-icon" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="team-member">
          <h4>Avinash</h4>
          <p>A detail-oriented developer with a knack for solving problems and optimizing software performance.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/avinash-aryan-74006b2b3/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin social-icon" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/a_aaaryan/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram social-icon" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="team-member">
          <h4>Yuvraj</h4>
          <p>A creative coder who enjoys bringing ideas to life through design and development.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/yuvraj-pradhan-44863030a/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin social-icon" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/yuviiii.i/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram social-icon" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      <h3 className="section-title">Our Mission</h3>
      <p className="mission-statement">
        Our mission is to empower developers and users by providing a platform where they can collaborate on bug tracking and resolution. Together, we can make software development smoother and more efficient.
      </p>

      <h3 className="section-title">Get in Touch</h3>
      <p className="contact-info">
        Feel free to reach out if you have any questions or feedback!
        <br />
        Email: <a href="mailto:aadilahsan007@example.com">bugHunter@example.com</a>
      </p>
    </div>
  );
};

export default About;
