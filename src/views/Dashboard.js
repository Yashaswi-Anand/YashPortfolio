import React from 'react';
import { motion } from 'framer-motion';
import NavBar from './NavBar';
import Home from './Home';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Project from './Project';
import Contact from './Contact';
import Pattern from '../components/Pattern';
import Achivement from './Achivement';
import FloatingParticles from '../components/FloatingParticles';
import AnimatedSection from '../components/AnimatedSection';

function Dashboard() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  return (
    <Pattern component={
      <div>
        <FloatingParticles />
        <NavBar />
        <motion.div 
          className="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.section 
            id="home"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <Home />
          </motion.section>
          
          <AnimatedSection delay={0.2}>
            <section id="experience">
              <Experience />
            </section>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <section id="skills">
              <Skills />
            </section>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <section id="education">
              <Education />
            </section>
          </AnimatedSection>
          
          <AnimatedSection delay={0.5}>
            <section id="project">
              <Project />
            </section>
          </AnimatedSection>
          
          <AnimatedSection delay={0.6}>
            <section id="achievements">
              <Achivement/>
            </section>
          </AnimatedSection>
          
          <AnimatedSection delay={0.7}>
            <section id="contact">
              <Contact />
            </section>
          </AnimatedSection>
        </motion.div>
      </div>
    } />
  );
}

export default Dashboard