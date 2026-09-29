import React from "react";
import "./App.css";

const skills = [
  "JavaScript ES6+", "Node.js", "Express.js", "NestJS", "REST APIs",
  "WebSockets", "MongoDB", "MySQL", "PostgreSQL", "JWT", "RBAC",
  "OAuth2", "Razorpay", "Git", "GitHub", "Postman", "CI/CD"
];

const projects = [
  {
    title: "MittsureOne",
    category: "Sales & ERP Management",
    description: "Backend APIs for sales tracking, visit management and automated reporting modules.",
    technologies: ["Node.js", "Express.js", "MongoDB", "REST API"]
  },
  {
    title: "Vedic",
    category: "E-commerce Platform",
    description: "Backend services for inventory management, secure checkout and third-party integrations.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Payment API"]
  },
  {
    title: "Klubba",
    category: "Ed-Tech Platform",
    description: "Multi-tenant APIs supporting learners, coaches and academies with booking and payment workflows.",
    technologies: ["Node.js", "MongoDB", "REST API", "Payments"]
  },
  {
    title: "DoYourSurvey",
    category: "Survey Platform",
    description: "Dynamic survey APIs with multiple question types, MongoDB storage and reporting.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Analytics"]
  }
];

export default function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="logo"><span>&lt;</span> Amit Kumar <span>/&gt;</span></div>
        <div className="nav-links">
          <a href="#home">Home</a><a href="#about">About</a><a href="#skills">Skills</a>
          <a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
        </div>
        <a href="mailto:akssmbr91@gmail.com" className="nav-button">Hire Me</a>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <p className="small-heading">HELLO, I'M</p>
          <h1>Amit <span>Kumar</span></h1>
          <h2>Node.js Backend Developer</h2>
          <p className="hero-description">
            Backend Developer with 3+ years of experience building scalable,
            secure and production-ready backend applications using Node.js,
            Express.js, MongoDB and MySQL.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">View My Work</a>
            <a href="mailto:akssmbr91@gmail.com" className="secondary-btn">Let's Talk</a>
          </div>
          <div className="social-links">
            <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noreferrer">GitHub</a>
            <a href="mailto:akssmbr91@gmail.com">Email</a>
          </div>
        </div>

        <div className="hero-card">
          <div className="code-window">
            <div className="window-header"><span></span><span></span><span></span></div>
            <pre>{`const developer = {
  name: "Amit Kumar",
  role: "Backend Developer",
  experience: "3+ Years",

  stack: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL"
  ],

  focus: [
    "REST APIs",
    "Security",
    "Performance",
    "Scalability"
  ]
};`}</pre>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-title"><span>01.</span><h2>About Me</h2></div>
        <div className="about-grid">
          <div>
            <p>I am a Node.js Backend Developer with 3+ years of professional experience in designing, developing and maintaining scalable backend applications.</p>
            <p>My experience includes RESTful API development, authentication and authorization, database optimization, payment gateway integrations and production backend systems.</p>
            <p>I enjoy solving complex backend problems and building reliable APIs that are secure, maintainable and performance-oriented.</p>
          </div>
          <div className="about-stats">
            <div className="stat"><h3>3+</h3><p>Years Experience</p></div>
            <div className="stat"><h3>4+</h3><p>Production Projects</p></div>
            <div className="stat"><h3>10K+</h3><p>Daily Users</p></div>
            <div className="stat"><h3>30-40%</h3><p>API Optimization</p></div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-title"><span>02.</span><h2>Technical Skills</h2></div>
        <div className="skills-container">
          {skills.map((skill) => <div className="skill-card" key={skill}><div className="skill-icon">{skill[0]}</div><span>{skill}</span></div>)}
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-title"><span>03.</span><h2>Experience</h2></div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p className="timeline-date">December 2022 — Present</p>
              <h3>Node.js Backend Developer</h3>
              <h4>QDegrees Services Pvt. Ltd.</h4>
              <ul>
                <li>Developed and maintained scalable MERN applications serving 10,000+ daily users.</li>
                <li>Developed secure REST APIs using JWT authentication and RBAC.</li>
                <li>Integrated Razorpay payment gateway supporting high-volume transaction workflows.</li>
                <li>Optimized MongoDB and MySQL queries, indexes and API performance.</li>
                <li>Reduced API response times by up to 30-40%.</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p className="timeline-date">2015 — 2022</p>
              <h3>Vendor Coordinator / Government Service Facilitator</h3>
              <h4>Expert Engineers & Traders</h4>
              <ul>
                <li>Managed government service projects for Gram Panchayats.</li>
                <li>Coordinated with government officials and stakeholders.</li>
                <li>Managed documentation, reporting, service delivery and issue resolution.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-title"><span>04.</span><h2>Featured Projects</h2></div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={project.title}>
              <div className="project-top"><div className="folder">&lt;/&gt;</div><span className="project-number">0{index + 1}</span></div>
              <h3>{project.title}</h3><h4>{project.category}</h4>
              <p>{project.description}</p>
              <div className="project-tech">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title"><span>05.</span><h2>Key Contributions</h2></div>
        <div className="achievement-grid">
          <div><h3>⚡ Performance</h3><p>Optimized database queries, indexing, caching and aggregation strategies to improve API performance.</p></div>
          <div><h3>🔐 Security</h3><p>Implemented JWT authentication, RBAC and secure authorization mechanisms.</p></div>
          <div><h3>🚀 Scalability</h3><p>Built scalable backend architectures and modular REST API systems for production applications.</p></div>
          <div><h3>💳 Integrations</h3><p>Integrated third-party services including payment and logistics APIs.</p></div>
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="small-heading">06. WHAT'S NEXT?</p>
        <h2>Let's Build Something <span>Great.</span></h2>
        <p>I'm currently open to backend development opportunities where I can build scalable and reliable applications.</p>
        <a href="mailto:akssmbr91@gmail.com" className="primary-btn">Contact Me</a>
        <div className="contact-info"><span>📧 akssmbr91@gmail.com</span><span>📱 +91 8340110350</span><span>📍 India</span></div>
      </section>

      <footer><p>© {new Date().getFullYear()} Amit Kumar</p><p>Built with React & Node.js</p></footer>
    </div>
  );
}
