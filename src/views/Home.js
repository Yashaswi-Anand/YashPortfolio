import React from 'react'
import Typewriter from 'typewriter-effect';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const logo = require('../assets/logo.jpg')

function Home() {
    return (
        <div>
            <div className='d-flex justify-center align-center flex-direction-column w-100'>
                <h2 className='r-margin-top'>Yashaswi Anand</h2>
                <div className='d-flex w-10 0 g-40 justify-center justify-align-center'>
                    <FaLinkedinIn className='social-icons' onClick={() => window.open('https://www.linkedin.com/in/yashaswi-anand/')} />
                    <FaGithub className='social-icons' onClick={() => window.open('https://github.com/yashaswi-anand')} />
                    <MdEmail className='social-icons' onClick={() => window.open('mailto:anandyash1711@gmail.com')} />
                    <p className='social-icons m-0 p-0' onClick={() => window.open('https://drive.google.com/file/d/1mh3vggLioADoscE3CBzPpIwLNxgYKU-r/view?usp=sharing')}>Resume</p>
                </div>
            </div>

            <div className='d-flex justify-center align-center w-100 m-t-50 flex-direction'>
                <div className='d-flex justify-center align-center flex-direction-column w-30-100'>
                    <img src={logo}
                        height={180} width={180} style={{ 'borderRadius': '50%' }} alt="profile_image" />
                    <p className='type-writer w-100'>
                        <Typewriter
                            options={{
                                strings: ['Backend Developer', 'NodeJS Developer', 'ReactJS Developer', 'Full Stack Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </p>
                </div>
                <div className='w-70-100'>
                    {/* <p className='about-discription'>I am a passionate <strong>full-stack developer</strong> and technology 
                        enthusiast with extensive hands-on experience in designing, 
                        developing, and maintaining dynamic web applications. 
                        I thrive on tackling innovative and challenging projects, 
                        always eager to enhance my expertise and expand my skill set. 
                        Whether collaborating within a team or working independently,
                         I consistently deliver high-quality results. My dedication to 
                         continuous learning and professional growth enables me to adapt 
                         seamlessly to evolving technologies and industry trends.</p> */}

                    <p className='about-discription'>Results-driven and detail-oriented professional with proven experience in <strong>full-stack software 
                        development</strong>, backend architecture, and web application engineering. Proficient in <i>Python,
                        Java, Node.js, ReactJs, PostgreSQL, and AWS</i>. Experienced in building scalable systems, 
                        optimizing performance, and managing CI/CD workflows. Seeking impactful roles to contribute technical expertise 
                        and drive innovation.</p>
                </div>
            </div>
        </div>
    )
}

export default Home