import React from 'react';
import NavBar from './NavBar';

function Dashboard() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <section id="home">
          <h2>Home</h2>
          <p>Welcome to my portfolio!</p>
        </section>
        <section id="about">
          <h2>About</h2>
          <p>This section contains information about me.</p>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <p>This section highlights my technical and soft skills.</p>
        </section>
        <section id="experience">
          <h2>Experience</h2>
          <p>Here's where you'll find my work experience and projects.</p>
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