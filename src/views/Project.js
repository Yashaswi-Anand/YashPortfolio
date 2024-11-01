import React from 'react'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Project() {
    return (
        <div>
            <div className='d-flex justify-center align-center g-10'>
                <span><FontAwesomeIcon icon={faBriefcase} /></span><span><h1>Projects</h1></span>
            </div>
        </div>
    )
}

export default Project