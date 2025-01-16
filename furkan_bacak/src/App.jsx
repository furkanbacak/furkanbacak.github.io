import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero-section">
        <div className="hero-content">
          <img src="/fbacak_logo.png" alt="Furkan Bacak Logo" className="logo" />
          <h1 className="hero-title">Welcome to Furkan Bacak's Website</h1>
          <p className="hero-subtitle">Crafting intuitive and modern web experiences</p>
          <a href="#about" className="cta-button">Learn More</a>
        </div>
      </header>
      <main>
        <section id="about" className="section about-section">
          <h2>About Me</h2>
          <p>
            I’m Furkan, a developer passionate about creating clean, modern, and user-friendly web designs. Explore my projects and insights below!
          </p>
        </section>
        <section id="projects" className="section projects-section">
          <h2>Projects</h2>
          <div className="project-cards">
            <div className="project-card">
              <h3>Project 1</h3>
              <p>A description of your first project.</p>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>A description of your second project.</p>
            </div>
            <div className="project-card">
              <h3>Project 3</h3>
              <p>A description of your third project.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>© 2025 Furkan Bacak. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;