import { motion } from 'framer-motion';
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedSection from '../components/AnimatedSection';
// import AnimatedText from '../components/AnimatedText';

function Skills() {
    const skillsData = [
        { title: "Programming", skills: "Java • JavaScript • Python" },
        { title: "Backend", skills: "Node.js • Hapi.js • GoLang" },
        { title: "Databases", skills: "MySQL • PostgreSQL • MongoDB • Redis" },
        { title: "DevOps", skills: "Docker • Kubernetes • AWS" },
        { title: "Frontend", skills: "React.js • Angular.js • Material-UI" },
        { title: "Tools", skills: "Git • GitHub • GitLab • VS Code" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const skillCardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9,
            rotateX: -15,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
        hover: {
            scale: 1.05,
            y: -10,
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 20,
            },
        },
    };

    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.8,
                delay: 0.3,
                type: "spring",
                stiffness: 200,
                damping: 10,
            },
        },
        hover: {
            scale: 1.2,
            rotate: 360,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <AnimatedSection>
            <div className="section-screen">
                <motion.div
                    className='d-flex justify-center align-center g-10'
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.span
                        variants={iconVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                    >
                    </motion.span>
                    <div className='d-flex justify-center align-center g-10'>
                        <span><FontAwesomeIcon icon={faCogs} size={50}/></span><span><h1>Skills</h1></span>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="skills-grid"
                >
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skills-category animated-skill-card"
                            variants={skillCardVariants}
                            whileHover="hover"
                            whileTap={{ scale: 0.98 }}
                        >
                            <motion.h4
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                            >
                                {skill.title}
                            </motion.h4>
                            <motion.p
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                            >
                                {skill.skills}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </AnimatedSection>
    )
}

export default Skills