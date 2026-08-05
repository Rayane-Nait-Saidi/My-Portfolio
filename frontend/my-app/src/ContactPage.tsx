import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import './ContactPage.css';

import { MdEmail } from 'react-icons/md';
import { FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa';



const ContactPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const contactMethods = [
    {
      id: 1,
      platform: "Email",
      description: "Send a direct message to my inbox.",
      contact: "nr_nait_saidi@esi.dz",
      icon: <MdEmail style={{color:"blue"}}/>,
      link: "mailto:hello@yacine.dev"
    },
    {
      id: 2,
      platform: "Instagram",
      description: "Follow me on Instagram.",
      contact: "Rayane Nait",
      icon: <FaInstagram style={{color:"blue"}}/>,
      link: "https://www.instagram.com/nait2346/"
    },
    {
      id: 3,
      platform: "GitHub",
      description: "Explore my repositories and contributions.",
      contact: "github.com/rayane-nait-saidi",
      icon: <FaGithub style={{color:"blue"}}/>,
      link: "https://github.com/rayane-nait-saidi"
    },
    {
      id: 4,
      platform: "LinkedIn",
      description: "Let's connect professionally.",
      contact: "linkedin.com/in/nait-saidi-rayane",
      icon: <FaLinkedin style={{color:"blue"}}/>,
      link: "https://www.linkedin.com/in/nait-saidi-rayane-179642315/"
    }
  ];

  return (
    <div className="contact-page">
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

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="contact-content">
          <h2 className="section-title">
            Let's build <span className="highlight">something together</span>
          </h2>
          
          <p className="contact-description">
            Have a project in mind or just want to say hi? Feel free to reach out through any of these platforms. I'm always open to discussing new opportunities or creative collaborations.
          </p>
          
          <div className="contact-grid">
            {contactMethods.map((method) => (
              <a 
                key={method.id}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer" 
                className="contact-card"
              >
                <div className="contact-icon">{method.icon}</div>
                <div className="contact-details">
                  <h3 className="contact-platform">{method.platform}</h3>
                  <p className="contact-description-text">{method.description}</p>
                  <p className="contact-link">
                    {method.contact} <span className="arrow">→</span>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;