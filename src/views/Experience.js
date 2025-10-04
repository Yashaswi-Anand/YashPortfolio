import { faBriefcase, faCalendarAlt, faMapMarkerAlt, faCode, faDatabase, faCloud, faCogs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedText from '../components/AnimatedText';

function Experience() {
    const experienceData = [
        {
            company: "Upjao Agrotech Private Limited",
            position: "Full Stack Developer",
            duration: "Apr 2023 - Present",
            location: "Remote",
            logo: "https://upjao.ai/wp-content/uploads/2023/10/Upjao-Logo-1.png",
            description: "Leading full-stack development initiatives in agricultural technology, focusing on scalable web applications and data optimization.",
            achievements: [
                {
                    icon: faCode,
                    title: "API Development & Authentication",
                    description: "Implemented numerous APIs for various projects, including login authentication systems with AWS Cognito and middleware using Node.js. Expanded proficiency by creating some APIs in Go.",
                    technologies: ["Node.js", "Go", "AWS Cognito", "REST APIs"]
                },
                {
                    icon: faDatabase,
                    title: "Database Architecture Migration",
                    description: "Transitioned backend data architecture from MongoDB to PostgreSQL, achieving significant performance improvements. Implemented Redis caching to optimize data retrieval and enhance system efficiency.",
                    technologies: ["PostgreSQL", "MongoDB", "Redis", "Database Optimization"]
                },
                {
                    icon: faCogs,
                    title: "Web Application Development",
                    description: "Engineered multiple web applications, including a comprehensive Dashboard using graph-based interfaces, a Crop Trading Platform, a Crop Scanner application, and a Warehouse tracking application utilizing ReactJs.",
                    technologies: ["React.js", "Dashboard Development", "Graph Interfaces", "Trading Platform"]
                },
                {
                    icon: faCloud,
                    title: "DevOps & CI/CD Implementation",
                    description: "Acquired a foundational understanding of Docker, Kubernetes, continuous integration and deployment (CI/CD) pipelines to streamline development workflows.",
                    technologies: ["Docker", "Kubernetes", "CI/CD", "DevOps"]
                }
            ]
        },
        {
            company: "Technative Consultancy Services Pvt Ltd",
            position: "Intern - Software Developer",
            duration: "Jan 2023 - Mar 2023",
            location: "Remote",
            logo: "https://via.placeholder.com/120x120/2c3e50/ffffff?text=TC",
            description: "Designed and developed a web application using React.js for the frontend and built REST APIs with Node.js and Hapi.js for efficient backend operations. Structured project hierarchy and implemented test run features to assist the testing team in evaluating project functionalities effectively.",
            achievements: []
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50, scale: 0.9 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };

    return (
        <AnimatedSection className='section-screen'>
            <motion.div
                className='d-flex justify-center align-center g-10'
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.span
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.6 } }}
                >
                    <FontAwesomeIcon icon={faBriefcase} />
                </motion.span>
                <span>
                    <AnimatedText text="Experience" />
                </span>
            </motion.div>

            <motion.div
                className='experience-timeline'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Experience Timeline */}
                <div className="main-timeline">
                    <div className="main-timeline-line"></div>

                    {experienceData.map((experience, expIndex) => (
                        <motion.div
                            key={expIndex}
                            className="experience-block"
                            variants={itemVariants}
                            custom={expIndex}
                        >
                            {/* Company Header Card */}
                            <motion.div
                                className="experience-company-card"
                                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            >
                                <div className="experience-timeline-marker">
                                    <motion.div
                                        className="main-marker-icon"
                                        whileHover={{
                                            scale: 1.2,
                                            rotate: 360,
                                            transition: { duration: 0.6 }
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faBriefcase} />
                                    </motion.div>
                                </div>

                                <div className="company-card-content">
                                    <motion.div
                                        className="company-logo-wrapper"
                                        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                                    >
                                        <img
                                            src={experience.logo}
                                            alt={`${experience.company} logo`}
                                            className="company-logo"
                                        />
                                        <div className="logo-glow"></div>
                                    </motion.div>

                                    <div className="company-details">
                                        <motion.h2
                                            className="company-name"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 0.8 + (expIndex * 0.2) }}
                                        >
                                            {experience.company}
                                        </motion.h2>

                                        <motion.h3
                                            className="position-title"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 1 + (expIndex * 0.2) }}
                                        >
                                            {experience.position}
                                        </motion.h3>

                                        <div className="experience-meta">
                                            <motion.div
                                                className="meta-item"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 1.2 + (expIndex * 0.2) }}
                                            >
                                                <FontAwesomeIcon icon={faCalendarAlt} />
                                                <span>{experience.duration}</span>
                                            </motion.div>

                                            <motion.div
                                                className="meta-item"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 1.4 + (expIndex * 0.2) }}
                                            >
                                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                                <span>{experience.location}</span>
                                            </motion.div>
                                        </div>

                                        <motion.p
                                            className="company-description"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 1.6 + (expIndex * 0.2) }}
                                        >
                                            {experience.description}
                                        </motion.p>

                                        {/* Achievements List */}
                                        {experience.achievements.length > 0 && (
                                            <motion.div
                                                className="achievements-list"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 1.8 + (expIndex * 0.2) }}
                                            >
                                                <h4 className="achievements-title">Key Achievements:</h4>
                                                <ul className="achievements-bullets">
                                                    {experience.achievements.map((achievement, index) => (
                                                        <motion.li
                                                            key={index}
                                                            className="achievement-bullet"
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{
                                                                duration: 0.5,
                                                                delay: 2 + (expIndex * 0.3) + (index * 0.1)
                                                            }}
                                                            whileHover={{
                                                                x: 5,
                                                                transition: { duration: 0.2 }
                                                            }}
                                                        >
                                                            <div className="bullet-content">
                                                                <div className="bullet-header">
                                                                    <FontAwesomeIcon
                                                                        icon={achievement.icon}
                                                                        className="bullet-icon"
                                                                    />
                                                                    <span className="bullet-title">{achievement.title}</span>
                                                                </div>
                                                                <p className="bullet-description">{achievement.description}</p>
                                                                <div className="bullet-technologies">
                                                                    {achievement.technologies.map((tech, techIndex) => (
                                                                        <span key={techIndex} className="bullet-tech-tag">
                                                                            {tech}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                        </div>
            </motion.div>
        </AnimatedSection>
    )
}

export default Experience
