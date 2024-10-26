import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCogs, faBriefcase, faGraduationCap, faProjectDiagram, faTrophy, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const [isFixed, setIsFixed] = useState(false);

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
            <div className="navbar-container">
                <ul className={isFixed ? 'navbar-items sticky_menu' : 'navbar-items'}>
                    <li><a href="#home"><FontAwesomeIcon icon={faHome} /> <span className="nav-text">Home</span></a></li>
                    <li><a href="#skills"><FontAwesomeIcon icon={faCogs} /> <span className="nav-text">Skills</span></a></li>
                    <li><a href="#experience"><FontAwesomeIcon icon={faBriefcase} /> <span className="nav-text">Experience</span></a></li>
                    <li><a href="#education"><FontAwesomeIcon icon={faGraduationCap} /> <span className="nav-text">Education</span></a></li>
                    <li><a href="#portfolio"><FontAwesomeIcon icon={faProjectDiagram} /> <span className="nav-text">Portfolio</span></a></li>
                    <li><a href="#achievements"><FontAwesomeIcon icon={faTrophy} /> <span className="nav-text">Achievements</span></a></li>
                    <li><a href="#contact"><FontAwesomeIcon icon={faEnvelope} /> <span className="nav-text">Contact</span></a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
