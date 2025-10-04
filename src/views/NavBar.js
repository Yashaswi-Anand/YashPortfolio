import { useEffect, useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCogs, faBriefcase, faGraduationCap, faProjectDiagram, faTrophy, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navItems = useMemo(() => [
        { id: 'home', icon: faHome, label: 'Home' },
        { id: 'skills', icon: faCogs, label: 'Skills' },
        { id: 'experience', icon: faBriefcase, label: 'Experience' },
        { id: 'education', icon: faGraduationCap, label: 'Education' },
        { id: 'project', icon: faProjectDiagram, label: 'Project' },
        { id: 'achievements', icon: faTrophy, label: 'Achievements' },
        { id: 'contact', icon: faEnvelope, label: 'Contact' }
    ], []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show/hide navbar based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            // Set fixed position
            setIsFixed(currentScrollY > 50);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Auto-detect active section based on scroll position
    useEffect(() => {
        const handleScrollSpy = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScrollSpy, { passive: true });
        return () => window.removeEventListener('scroll', handleScrollSpy);
    }, [navItems]);

    const handleNavClick = (sectionId) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar-fancy ${isFixed ? 'navbar-fixed' : ''} ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
            <div className="navbar-glow"></div>
            <div className="navbar-container">
                <ul className="navbar-items-fancy">
                    {navItems.map((item, index) => (
                        <li
                            key={item.id}
                            onClick={() => handleNavClick(item.id)}
                            className={`navbar-item-fancy ${activeSection === item.id ? 'active' : ''}`}
                            style={{ '--delay': `${index * 0.1}s` }}
                        >
                            <a href={`#${item.id}`} onClick={(e) => e.preventDefault()}>
                                <div className="nav-icon-wrapper">
                                    <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                                    <div className="nav-ripple"></div>
                                </div>
                                <span className="nav-text">{item.label}</span>
                                <div className="nav-indicator"></div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
