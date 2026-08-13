import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import './AboutPage.css';

const AboutPage: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="about-page">
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
      

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-content">
          <h2 className="about-title">
            <span className="highlight">The person</span> behind the code.
          </h2>
          
          <div className="about-grid">
            {/* Left Column - Main Bio */}
            <div className="about-bio">
              <p className="bio-text">
                I am Rayane Nait Saidi , a Software Engineering student at <a className="link">ESI Algiers</a> with a deep focus on crafting high-performance web experiences. As a dedicated <a  className="link">full-stack developer</a>, I bridge the gap between elegant user interfaces and robust server-side architecture, always prioritizing the user journey.
              </p>
              <p className="bio-text">
                Beyond standard feature implementation, I specialize in <span className="highlight-text">security-first development</span>. My workflow involves rigorous protection against modern web threats, implementing strict <a className="link">authentication</a>, mitigating <a className="link">vulnerabilities</a>, and ensuring defense-in-depth against <a className="link">attacks</a>. I believe that performance and security are not features, but prerequisites for any professional digital product.
              </p>
            </div>

            {/* Right Column - Info Cards */}
            <div className="about-info">
              {/* Education Cards */}
              <div className="info-card">
                <h3 className="card-title">BACHELOR'S DEGREE</h3>
                <p className="card-content">Mathematics</p>
                <p className="card-grade">Grade: 17.74</p>
              </div>

              <div className="info-card">
                <h3 className="card-title">UNIVERSITY</h3>
                <p className="card-content">ESI Algiers</p>
              </div>

              <div className="info-card">
                <h3 className="card-title">SPECIALIZATION</h3>
                <p className="card-content">Software Engineering</p>
              </div>

              <div className="info-card status-card">
                <h3 className="card-title">STATUS</h3>
                <p className="card-content status-badge">Open to Internships</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="skills-section">
            <h3 className="skills-title">Tech Stack</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4 className="category-title">FRONTEND</h4>
                <div className="skill-tags">
                  <span className="skill-tag">HTML</span>
                  <span className="skill-tag">CSS</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">React Native</span>
                </div>
              </div>

              <div className="skill-category">
                <h4 className="category-title">BACKEND</h4>
                <div className="skill-tags">
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express.js</span>
                </div>
              </div>

              <div className="skill-category">
                <h4 className="category-title">DATABASE</h4>
                <div className="skill-tags">
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">Redis</span>
                </div>
              </div>

              <div className="skill-category">
                <h4 className="category-title">Tools&DevOps</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">GitHub</span>
                  <span className='skill-tag'>VS CODE</span>
                  <span className="skill-tag">Postman</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">Vercel</span>
                  <span className="skill-tag">Render</span>
                  <span className="skill-tag">MongoDB Compass</span>
                  <span className="skill-tag">MongoDB shell- Mongosh </span>
                 
                  
                </div>
              </div>
              <div className="skill-category">
                <h4 className="category-title">OTHERS</h4>
                <div className="skill-tags">
                  <span className="skill-tag">C LANGUAGE</span>
                  <span className="skill-tag">PASCAL</span>
                  <span className="skill-tag">JAVA</span>
                  <span className="skill-tag">ASSEMBLY X86</span>
                  <span className="skill-tag">PYTHON</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;