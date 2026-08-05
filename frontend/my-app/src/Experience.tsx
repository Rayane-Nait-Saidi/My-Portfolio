import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import './Experience.css';
import certificateImage from './assets/pascal_certificate.png';


/*const titles = ["Alemni Online", "Programming Tutor"];
const desc = ["A mobile app that connects students/their parents with high competent teachers that offers many services, sessions and documents to improve students level", "A new project is currently in development. Stay tuned for more exciting web and mobile experiences."];
const type = ["app" , "ceftificate"] ;
const tech = [["TypeScript", "React Native", "Node.js & Express.js", "MongoDB"], ["React"]];*/
const projects = [
    {title: "Alemni Online", description: "A mobile app that connects students/their parents with high competent teachers that offers many services, sessions and documents to improve students level", type: "app", tech: ["TypeScript", "React Native", "Node.js & Express.js", "MongoDB"] , link:"https://github.com/Rayane-Nait-Saidi/PRJP"},
    {title: "Pascal Programming Tutor", description: "I worked as a Pascal language programming tutor at the CSE club at ESI university.", type: "certificate", tech: ["Pascal language", "Programming basics"] , link: certificateImage} , 
    {title: "Rayane-e-commerce website" , description: "simple E-commerce website , the objective behind it was to apply the security features that I learned in my backend security course" , type: "website" , tech: ["TypeScript" , "React", "Node.js & Express.js", "MongoDB"] , link:"https://rayane-e-commerce-neon.vercel.app/"}, 
    {title: "Hamida App" , description: "A mobile app for my mom currently , she now uses it to help her teaching her students Quranic lessons and to manage her students and their progress" , type: "app" , tech: ["TypeScript" , "React Native", "Node.js & Express.js", "MongoDB ", "Redis"] , link:"https://github.com/Rayane-Nait-Saidi/hamida-app"},
    {title: "Farm Platform" , description : "A desktop application was designed as a Pratcial work in our school course of OOP to help farmers manage their farms , the main goal was to apply the OOP concepts that we learned in the school" , type: "app" , tech: ["Java" , "OOP concepts"] , link:"https://github.com/Rayane-Nait-Saidi/TP-POO-2025-2026"}
]
const ExperiencePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="experience-page">
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

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="projects-content">
          
          <h2 className="section-title">
            Selected <span className="highlight">Works</span>
          </h2>
          
          <div className="projects-grid">

            {
                projects.map((project, index) => (
                    <div className="project-card" key={index}>
              <div className="project-header">
               
                <h3 className="project-name">{project.title}</h3>
              </div>
              
              <p className="project-description">
                {project.description}
              </p>
              
              <div className="project-tags">
                {project.tech.map((tech, index) => (
                  <span className="project-tag" key={index}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-actions">
                {project.type === "app" && (
                  <Link to={project.link} target="_blank" className="project-link" style={{cursor:"pointer"}}>Visit Github →</Link>
                )}
                {project.type === "certificate" && (
                  <p  className="project-link" onClick={() => window.open(project.link, '_blank')} style={{ cursor: 'pointer' }}>
                    View certificate →
                  </p>
                )}
                {project.type === "website" && (
                  <Link to={project.link} target="_blank" className="project-link" style={{cursor:"pointer"}}>View website →</Link>
                )}
              </div>
            </div>
                ))
            }
            
            {/*<div className="project-card">
              <div className="project-header">
               
                <h3 className="project-name">Alemni Online</h3>
              </div>
              
              <p className="project-description">
                A mobile app that connects students/their parents with high competent teachers that offers many services, sessions and documents to improve students level
              </p>
              
              <div className="project-tags">
                <span className="project-tag">TypeScript</span>
                <span className="project-tag">React Native</span>
                <span className="project-tag">Node.js & Express.js</span>
                <span className="project-tag">MongoDB</span>
              </div>
              
              <div className="project-actions">
                <a href="#live" className="project-link">View Project →</a>
              </div>
            </div>*/}

            
            {/*<div className="project-card">
              <div className="project-header">
                
                <h3 className="project-name">Next Project</h3>
              </div>
              
              <p className="project-description">
                A new project is currently in development. Stay tuned for more exciting web and mobile experiences.
              </p>
              
              <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">TypeScript</span>
                <span className="project-tag">Node.js</span>
              </div>
              
              <div className="project-actions">
                <span className="project-link disabled">Coming Soon</span>
              </div>
            </div>*/}





          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;