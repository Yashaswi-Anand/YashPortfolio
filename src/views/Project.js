import React from 'react'
import Cards from '../components/Cards';
import Social from '../components/Social';
// import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import FilpCard from '../components/FilpCard'

function Project() {
    // const cards = [
    //     {
    //         front: "Card 1 Front",
    //         back: "Card 1 Back",
    //     },
    //     {
    //         front: "Card 2 Front",
    //         back: "Card 2 Back",
    //     },
    //     {
    //         front: "Card 3 Front",
    //         back: "Card 3 Back",
    //     },
    //     {
    //         front: "Card 3 Front",
    //         back: "Card 3 Back",
    //     },
    //     {
    //         front: "Card 3 Front",
    //         back: "Card 3 Back",
    //     }
    // ];
    return (
        <div>
            <Cards/>
            <Social/>
            {/* <div className='d-flex justify-center align-center g-10'>
                <span><FontAwesomeIcon icon={faBriefcase} /></span><span><h1>Projects</h1></span>
            </div>
            <div>
                <FilpCard cards={cards} />
            </div> */}

        </div>
    )
}

export default Project