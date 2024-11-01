import React from 'react'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Education() {
    const educationData = [
        {
            degree: 'B.Tech',
            institution: 'Motihari College Of Engineering',
            date: 'Sep 2018 - Aug 2022',
            description: "Algorithm, Data Structure, Operating System, Computer Network, Software Engineering, Discrete Mathematics, Computer Architecture and Organization, Theory of Computation, Compiler Design",
            grade: '8.68 CGPA',
            logo: 'https://upload.wikimedia.org/wikipedia/en/3/37/Motihari_College_of_Engineering_logo.jpg',
            branch: 'Computer Science and Engineering',
            align: 'left'
        },
        {
            degree: '12th',
            institution: 'Maharaja College, Ara',
            date: 'Aug 2015 - May 2017',
            description: 'Mathematics, Physics, Chemistry, English, Hindi',
            grade: '70.2%',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWw1m0tpWLB_XyjDAmxtzWgzpJA5uiLfpLDg&',
            align: 'right'
        },
        {
            degree: '10th',
            institution: 'Gyan Bharti Educational Complex',
            date: 'May 2015',
            description: 'English, Hindi, Mathematics, Science, Social Science',
            grade: '9.4 CGPA',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Ul3dQF2rGlpTYLMmxx2EN8Q63AHjA9xoqQ&s',
            align: 'left'
        }
    ];
    return (
        <div className='section-screen'>
            <div className='d-flex justify-center align-center g-10'>
                <span><FontAwesomeIcon icon={faBriefcase} /></span><span><h1>Education</h1></span>
            </div>
            <div>
                {educationData.map((item, index) => (
                    <div key={index} className='d-flex g-10 m-t-20' style={{backgroundColor:''}}>
                        <div className='education-logo'>
                            <img src={item.logo} alt={item.institution} height={'50%'} width={'50%'}/>
                        </div>
                        <div className="education-details">
                            <h3 className='m-0 p-0'>{item.degree}</h3>
                            <h4 className='m-0 p-0'>{item.institution}</h4>
                            <p className='m-0 p-0'>{item.date}</p>
                            <p className='m-0 p-0'>{item.grade}</p>
                            <p className='m-0 p-0'>{item.branch}</p>
                            <p className='m-0 p-0'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Education