import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AnimatedText from '../components/AnimatedText';
import AnimatedContainer from '../components/AnimatedContainer';
const logo = require('../assets/logo.jpg')

function Home() {
    const socialIcons = [
        { Icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/yashaswi-anand/', delay: 0.2 },
        { Icon: FaGithub, url: 'https://github.com/yashaswi-anand', delay: 0.3 },
        { Icon: MdEmail, url: 'mailto:anandyash1711@gmail.com', delay: 0.4 },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.5, rotate: -180 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 1.2,
                ease: [0.25, 0.25, 0.25, 0.75],
                delay: 0.3,
            },
        },
    };

    const socialIconVariants = {
        hidden: { opacity: 0, scale: 0, rotate: -180 },
        visible: (delay) => ({
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.6,
                delay: delay,
                type: "spring",
                stiffness: 200,
                damping: 10,
            },
        }),
        hover: {
            scale: 1.2,
            rotate: 5,
            transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 400,
                damping: 10,
            },
        },
        tap: {
            scale: 0.9,
            rotate: -5,
        },
    };

    return (
        <AnimatedContainer>
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
                <motion.div
                    className='d-flex justify-center align-center flex-direction-column w-100'
                    variants={itemVariants}
                >
                    <motion.h2
                        className='r-margin-top'
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <AnimatedText text="Yashaswi Anand" delay={0.5} />
                    </motion.h2>

                    <motion.div
                        className='d-flex w-10 0 g-40 justify-center justify-align-center'
                        variants={itemVariants}
                    >
                        {socialIcons.map(({ Icon, url, delay }, index) => (
                            <motion.div
                                key={index}
                                custom={delay}
                                variants={socialIconVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className='social-icons'
                                onClick={() => window.open(url)}
                                style={{ cursor: 'pointer' }}
                            >
                                <Icon />
                            </motion.div>
                        ))}

                        <motion.p
                            className='social-icons m-0 p-0'
                            custom={0.5}
                            variants={socialIconVariants}
                            whileHover="hover"
                            whileTap="tap"
                            onClick={() => window.open('https://drive.google.com/file/d/1mh3vggLioADoscE3CBzPpIwLNxgYKU-r/view?usp=sharing')}
                            style={{ cursor: 'pointer' }}
                        >
                            Resume
                        </motion.p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className='d-flex justify-center align-center w-100 m-t-50 flex-direction'
                    variants={itemVariants}
                >
                    <motion.div
                        className='d-flex justify-center align-center flex-direction-column w-30-100'
                        variants={itemVariants}
                    >
                        <img
                            src={logo}
                            height={180}
                            width={180}
                            style={{ borderRadius: '50%' }}
                            alt="profile_image"
                            variants={imageVariants}
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                                transition: { duration: 0.3 }
                            }}
                        />

                        <motion.div
                            className='type-writer w-100 m-t-10'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            <Typewriter
                                options={{
                                    strings: ['Backend Developer', 'NodeJS Developer', 'ReactJS Developer', 'Full Stack Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className='w-70-100'
                        variants={itemVariants}
                    >
                        <motion.p
                            className='about-discription'
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            The Results-driven and detail-oriented professional with proven experience in a <strong>full-stack software
                                development</strong>, backend architecture, and web application engineering. Proficient in <i>Python,
                                    Java, Node.js, ReactJs, PostgreSQL, and AWS</i>. Experienced in building scalable systems,
                            optimizing performance, and managing CI/CD workflows. Seeking impactful roles to contribute technical expertise
                            and drive innovation.
                        </motion.p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatedContainer>
    )
}

export default Home