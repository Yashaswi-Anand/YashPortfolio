import React from 'react'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Skills() {
    return (
        <div>
            <div class="section-screen">
                <div className='d-flex justify-center align-center g-10'>
                    <span><FontAwesomeIcon icon={faBriefcase} /></span><span><h1>Skill</h1></span>
                </div>
                <div class="skills-category">
                    <h4>Programming Languages</h4>
                    <p>Java, JavaScript</p>
                </div>

                <div class="skills-category">
                    <h4>Backend</h4>
                    <p>NodeJs, HapiJs, GoLang</p>
                </div>

                <div class="skills-category">
                    <h4>Databases</h4>
                    <p>MySQL, PostgreSQL, MongoDB, Redis</p>
                </div>

                <div class="skills-category">
                    <h4>DevOps</h4>
                    <p>Docker, Kubernetes, AWS</p>
                </div>

                <div class="skills-category">
                    <h4>Frontend</h4>
                    <p>HTML, CSS, AngularJS, ReactJS, MaterialUI</p>
                </div>

                <div class="skills-category">
                    <h4>Version Control</h4>
                    <p>Git, Github, Gitlab</p>
                </div>
            </div>
        </div>
    )
}

export default Skills