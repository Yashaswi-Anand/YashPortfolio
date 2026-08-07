import { faBriefcase, faCalendarAlt, faMapMarkerAlt, faCode, faDatabase, faCloud, faCogs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

function Experience() {
    const experienceData = [
        {
            company: "Upjao Agrotech Private Limited",
            position: "Senior Full Stack Developer",
            duration: "Apr 2026 - Present",
            location: "Ahemdabad",
            logo: "https://upjao.ai/wp-content/uploads/2023/10/Upjao-Logo-1.png",
            description: "Promoted to Senior Full Stack Developer. Leading full-stack development initiatives in agricultural technology with broader ownership of system architecture, code reviews, and mentoring.",
            achievements: []
        },
        {
            company: "Upjao Agrotech Private Limited",
            position: "Full Stack Developer",
            duration: "Apr 2023 - Mar 2026",
            location: "Ahemdabad",
            logo: "https://upjao.ai/wp-content/uploads/2023/10/Upjao-Logo-1.png",
            description: "Led full-stack development initiatives in agricultural technology, focusing on scalable web applications and data optimization.",
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
            logo: null,
            description: "Designed and developed a web application using React.js for the frontend and built REST APIs with Node.js and Hapi.js for efficient backend operations. Structured project hierarchy and implemented test run features to assist the testing team in evaluating project functionalities effectively.",
            achievements: []
        }
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

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
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
                <div className='d-flex justify-center align-center g-10'>
                    <span><FontAwesomeIcon icon={faBriefcase} style={{ fontSize: '1.9rem', color: '#4ecdc4' }} /></span><span><h1>Experience</h1></span>
                </div>
            </motion.div>

            <motion.div
                className='experience-timeline'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="main-timeline">
                    <div className="main-timeline-line"></div>

                    {experienceData.map((experience, expIndex) => (
                        <motion.div
                            key={expIndex}
                            className="experience-block"
                            variants={itemVariants}
                        >
                            <div className="experience-timeline-marker">
                                <div className="main-marker-icon">
                                    <FontAwesomeIcon icon={faBriefcase} />
                                </div>
                            </div>

                            <motion.div
                                className="exp-card"
                                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                            >
                                <div className="exp-card-header">
                                    {experience.logo ? (
                                        <div className="exp-logo-box">
                                            <img
                                                src={experience.logo}
                                                alt={`${experience.company} logo`}
                                                className="exp-logo"
                                            />
                                        </div>
                                    ) : (
                                        <div className="exp-logo-box exp-logo-fallback">
                                            {experience.company.charAt(0)}
                                        </div>
                                    )}

                                    <div className="exp-title-block">
                                        <h2 className="company-name">{experience.company}</h2>
                                        <h3 className="position-title">{experience.position}</h3>
                                    </div>

                                    <div className="exp-meta-chips">
                                        <span className="exp-chip">
                                            <FontAwesomeIcon icon={faCalendarAlt} />
                                            {experience.duration}
                                        </span>
                                        <span className="exp-chip">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                                            {experience.location}
                                        </span>
                                    </div>
                                </div>

                                <p className="company-description">{experience.description}</p>

                                {experience.achievements.length > 0 && (
                                    <div className="exp-achievements">
                                        <h4 className="achievements-title">Key Achievements</h4>
                                        <div className="exp-achievements-grid">
                                            {experience.achievements.map((achievement, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="exp-achievement-card"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: index * 0.08 }}
                                                >
                                                    <div className="exp-achievement-head">
                                                        <span className="exp-achievement-icon">
                                                            <FontAwesomeIcon icon={achievement.icon} />
                                                        </span>
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
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </AnimatedSection>
    )
}

export default Experience
