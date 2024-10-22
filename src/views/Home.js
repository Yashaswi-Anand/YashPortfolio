import React from 'react'
import Typewriter from 'typewriter-effect';

function Home() {
    return (
        <div>
            <div className='d-flex justify-center align-center flex-direction-column w-100'>
                <h2>Yashaswi Anand</h2>
                <div className='d-flex'>
                    linkedIn, github, email
                </div>
            </div>

            <div className='d-flex justify-center align-center w-100 m-t-50 flex-direction'>
                <div className='d-flex justify-center align-center flex-direction-column w-50'>
                    <img src='http://drive.google.com/uc?export=view&id=1yJgBM1Sldk2yGYvma0A3S61qjkNpwcGV' height={200} width={100} />
                    <p className='type-writer'>
                        <Typewriter
                            options={{
                                strings: ['Backend Developer', 'NodeJS Developer', 'ReactJS Developer', 'Full Stack Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </p>
                </div>
                <div className=''>
                    <p className='about-discription'>I am a dedicated <strong>full-stack developer</strong> and technology enthusiast
                        with over <b>+1.5 years</b> of hands-on experience in designing,
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