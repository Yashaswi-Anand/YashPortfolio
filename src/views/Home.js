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
                    <p className='social-icons m-0 p-0' onClick={() => window.open('https://drive.google.com/file/d/1yJTL04HKfLu_WqkPKTreIT-ygT4Fxr6U/view?usp=sharing')}>Resume</p>
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
                    <p className='about-discription'>I am a dedicated <strong>full-stack developer</strong> and technology enthusiast
                        with over years of hands-on experience in designing,
                        developing, and maintaining dynamic web applications.
                        I am highly passionate about working on innovative and challenging projects,
                        consistently seeking opportunities to expand my knowledge and skill set.
                        I excel in both collaborative team environments and independent work,
                        with a proven ability to deliver high-quality results.
                        My strong commitment to continuous learning and professional
                        growth drives my ability to adapt to evolving technologies and industry trends.</p>
                </div>
            </div>
        </div>
    )
}

export default Home