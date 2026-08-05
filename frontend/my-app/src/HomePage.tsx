import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './HomePage.css';
import profilePhoto from './assets/225268770.png';
import cv from './assets/NAIT_SAIDI_RAYANE_CV.pdf';

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">.dev</div>
        
        {/* Hamburger Menu Button */}
        <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)} style={{textDecoration:"none"}}><span>Home</span></Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)} style={{textDecoration:"none"}}><span>About</span></Link></li>
          
          <li><Link to="/projects" onClick={() => setIsMenuOpen(false)} style={{textDecoration:"none"}}><span>Projects&Experience</span></Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)} style={{textDecoration:"none"}}><span>Contact</span></Link></li>
          
        </ul>
        
        
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          
          <h1 className="hero-title">
            Hi, I'm Rayane Nait Saidi. <br />
            <span className="highlight">I build for the web & mobile</span>
          </h1>
          <p className="hero-description">
            I am a Software Engineering student at ESI Algiers focused on full-stack development , backend security and performance. I enjoy building modern applications with MERN stack while continuously improving my skills through real-world projects.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn primary">View Projects</Link>
            <p className="btn secondary" onClick={() => window.open(cv, '_blank')} style={{ cursor: 'pointer' }}>
              View CV
            </p>
          </div>
        </div>
        
        {/* Profile Photo */}
        <div className="hero-image">
          <img src={profilePhoto} alt="Rayane" className="profile-photo" />
        </div>
      </section>

      
    </div>
  );
};

export default HomePage;