import React from 'react'
import Cards from '../components/Cards';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Project() {
    const cards = [
        {
            project_name: "Card 1 Front",
            back: "Card 1 Back",
        },
        {
            project_name: "Card 2 Front",
            back: "Card 2 Back",
        },
        {
            project_name: "Card 3 Front",
            back: "Card 3 Back",
        },
        {
            project_name: "Card 4 Front",
            back: "Card 3 Back",
        }
    ];
    return (
        <div>
            <div className='d-flex justify-center align-center g-10'>
                <span><FontAwesomeIcon icon={faBriefcase} /></span><span><h1>Projects</h1></span>
            </div>
            <div className='card-container'>
                {cards && cards.map((card, index) => (
                    <Cards data={card} key={index}/>
                ))}
            </div>

        </div>
    )
}

export default Project