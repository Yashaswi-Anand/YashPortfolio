import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion';
import React from 'react'
import AnimatedSection from '../components/AnimatedSection';
import AnimatedText from '../components/AnimatedText';

function Experience() {
    const achievements = [
        "Implemented numerous APIs for various projects, including login authentication systems with AWS Cognito and middleware using Node.js. Expanded proficiency by creating some APIs in Go.",
        "Transitioned backend data architecture from MongoDB to PostgreSQL, achieving performance. Implemented Redis caching to optimize data retrieval and enhance system efficiency.",
        "Engineered multiple web applications, including a comprehensive Dashboard using graph-based interfaces, a Crop Trading Platform, a Crop Scanner application, and a Warehouse tracking application utilizing ReactJs.",
        "Acquired a foundational understanding of Docker, Kubernetes, continuous integration and deployment (CI/CD) pipelines."
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

    const listItemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: (index) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        }),
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
                className='m-t-30'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div 
                    className="d-flex space-between flex-direction experience-header"
                    variants={itemVariants}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.img 
                            src="https://upjao.ai/wp-content/uploads/2023/10/Upjao-Logo-1.png" 
                            alt='logo'
                            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            whileHover={{ 
                                scale: 1.1, 
                                rotate: 5,
                                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                                transition: { duration: 0.3 }
                            }}
                        />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <motion.h3 
                            className='p-0 m-0 animated-text-glow'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            Full Stack Developer
                        </motion.h3>
                        <motion.h4 
                            className='p-0 m-0'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                        >
                            Upjao Agrotech Private Limited
                        </motion.h4>
                        <motion.h5 
                            className='p-0 m-0'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                        >
                            Apr 2023 - Present
                        </motion.h5>
                    </motion.div>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <motion.ul className="experience-list">
                        {achievements.map((achievement, index) => (
                            <motion.li
                                key={index}
                                custom={index}
                                variants={listItemVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover={{ 
                                    x: 10, 
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                                className="experience-item"
                                dangerouslySetInnerHTML={{ __html: achievement }}
                            />
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </AnimatedSection>
    )
}

export default Experience