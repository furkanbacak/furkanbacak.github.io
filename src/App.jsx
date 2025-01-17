import './App.css';
import DinoGame from './DinoGame';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          {/* Logo */}
          <img
            src="/fbacak_logo.png"
            alt="Furkan Bacak Logo"
            className="logo"
          />
          {/* Hero Title and Subtitle */}
          <h1 className="hero-title">Welcome to Furkan Bacak's Website</h1>
          <p className="hero-subtitle">
            Crafting intuitive and modern web experiences
          </p>
          {/* Call-to-Action Button */}
          <a href="#about" className="cta-button">
            Learn More
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* About Section */}
        <section id="about" className="section about-section">
          <h2>About Me</h2>
          {/* Profile Image */}
          <div className="profile-container">
            <img
              src="/furkanbacak_profile.jpg"
              alt="Furkan Bacak"
              className="profile-photo"
            />
          </div>
          <p>
            With a Master’s in Geodesy and Geoinformation Science and a
            Bachelor’s in Geomatics Engineering, I blend technical expertise
            with a passion for customer engagement and growth. Driven by
            curiosity and a love for innovation, I aim to deliver impactful and
            strategic customer-focused solutions.
          </p>
          <p>
            <strong>Languages:</strong> Turkish (Native), English
            (Professional), German (Elementary)
          </p>
          <p>
            <strong>Certifications:</strong> ArcGIS Pro, Learning GitLab,
            Building Creative Online Communities
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/furkanbacak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Furkan Bacak
            </a>
          </p>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section experience-section">
          <h2>Experience</h2>
          <div className="experience-cards">
            <div className="experience-card">
              <h3>Working Student, Developer Relations</h3>
              <p>Planet | Dec 2023 - Present</p>
              <p>
                Enhancing developer engagement and ensuring smooth customer
                interactions in the geoinformation industry.
              </p>
            </div>
            <div className="experience-card">
              <h3>Customer Engagement & Project Manager</h3>
              <p>Allyd.ai | Apr 2024 - Present</p>
              <p>
                Spearheaded pre-launch engagement efforts and executed targeted
                cold email campaigns with a 70%+ open rate.
              </p>
            </div>
            <div className="experience-card">
              <h3>Business Development Intern</h3>
              <p>MetalMaker 3D | Jan 2023 - Feb 2023</p>
              <p>
                Conducted market research and generated outbound leads for
                potential business opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section projects-section">
          <h2>Projects</h2>
          <div className="project-cards">
            <div className="project-card">
              <h3>Cold Email Campaigns</h3>
              <p>
                Achieved 70%+ open rates, targeting strategic leads for Allyd.ai.
              </p>
            </div>
            <div className="project-card">
              <h3>Geospatial Data Integration</h3>
              <p>
                Worked on high-impact geoinformation projects at Planet,
                blending technical and relational expertise.
              </p>
            </div>
            <div className="project-card">
              <h3>Customer Engagement Strategy</h3>
              <p>
                Designed and implemented engagement strategies for Allyd.ai's
                pre-launch phase.
              </p>
            </div>
          </div>
        </section>

        {/* Dino Game Section */}
        <section id="game" className="section game-section">
          <h2>Play the Dino Game!</h2>
          <DinoGame />
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <h2>Contact Me</h2>
          <p>Email: <a href="mailto:furkanbacak97@gmail.com">furkanbacak97@gmail.com</a></p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/furkanbacak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Furkan Bacak
            </a>
          </p>
          <p>
            Medium:{" "}
            <a
              href="https://medium.com/@fbacak"
              target="_blank"
              rel="noopener noreferrer"
            >
              @fbacak
            </a>
          </p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 Furkan Bacak. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;