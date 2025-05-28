import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Project from './Project';
import Contact from './Contact';
import Pattern from '../components/Pattern';
import Achivement from './Achivement';

function Dashboard() {
  return (
    <Pattern component={
      <div>
        <NavBar />
        <div className="content">
          <section id="home">
            <Home />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="project">
            <Project />
          </section>
          <section id="achievements">
            <Achivement/>
          </section>
          <section id="contact">
            <h2>Contact</h2>
            <Contact />
          </section>
          <section className='m-t-100'>
          </section>
        </div>
      </div>
    } />
  );
}

export default Dashboard