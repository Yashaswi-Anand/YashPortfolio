import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Skills from './Skills';
import Experience from './Experience';

function Dashboard() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <section id="home">
          <Home/>
        </section>
        <section id="skills">
          <Skills/>
        </section>
        <section id="experience">
          <Experience/>
        </section>
        <section id="education">
          <h2>Education</h2>
          <p>Details about my educational background are here.</p>
        </section>
        <section id="portfolio">
          <h2>Portfolio</h2>
          <p>View some of my previous work and projects.</p>
        </section>
        <section id="achievements">
          <h2>Achievements</h2>
          <p>Here are some of my significant achievements.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Get in touch with me through this section.</p>
        </section>
      </div>
    </div>
  );
}

export default Dashboard