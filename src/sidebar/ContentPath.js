import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Internship from "../components/Internship";
import Education from "../components/Education";
import Project from "../components/Project";
import Achievement from "../components/Achievement";

const navItems = [
    { path: '/about', exact: true, name: 'About Me', element: AboutMe }, 
    { path: '/skills', exact: true, name: 'Skills', element: Skills }, 
    { path: '/experience', exact: true, name: 'Work Experience', element: Experience }, 
    { path: '/internship', exact: true, name: 'Internship', element: Internship }, 
    { path: '/education', exact: true, name: 'Education', element: Education }, 
    { path: '/project', exact: true, name: 'Project', element: Project }, 
    { path: '/achievements', exact: true, name: 'Achievements', element: Achievement }, 
]

export { navItems };