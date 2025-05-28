import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCogs, faBriefcase, faGraduationCap, faProjectDiagram, faTrophy, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import Loader from '../components/Loader';

const NavBar = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={isFixed ? 'sticky' : 'navbar'}>
            <div >
                {/* <Loader /> */}
            </div>
            <div className="navbar-container">
                <ul className={isFixed ? 'navbar-items sticky_menu' : 'navbar-items'}>
                    <li onClick={() => setActiveSection('home')} className={activeSection === 'home' ? 'active' : ''}><a href="#home"><FontAwesomeIcon icon={faHome} /> <span className="nav-text">Home</span></a></li>
                    <li onClick={() => setActiveSection('skills')} className={activeSection === 'skills' ? 'active' : ''}><a href="#skills"><FontAwesomeIcon icon={faCogs} /> <span className="nav-text">Skills</span></a></li>
                    <li onClick={() => setActiveSection('experience')} className={activeSection === 'experience' ? 'active' : ''}><a href="#experience"><FontAwesomeIcon icon={faBriefcase} /> <span className="nav-text">Experience</span></a></li>
                    <li onClick={() => setActiveSection('education')} className={activeSection === 'education' ? 'active' : ''}><a href="#education"><FontAwesomeIcon icon={faGraduationCap} /> <span className="nav-text">Education</span></a></li>
                    <li onClick={() => setActiveSection('project')} className={activeSection === 'project' ? 'active' : ''}><a href="#project"><FontAwesomeIcon icon={faProjectDiagram} /> <span className="nav-text">Project</span></a></li>
                    <li onClick={() => setActiveSection('achievements')} className={activeSection === 'achievements' ? 'active' : ''}><a href="#achievements"><FontAwesomeIcon icon={faTrophy} /> <span className="nav-text">Achievements</span></a></li>
                    <li onClick={() => setActiveSection('contact')} className={activeSection === 'contact' ? 'active' : ''}><a href="#contact"><FontAwesomeIcon icon={faEnvelope} /> <span className="nav-text">Contact</span></a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
