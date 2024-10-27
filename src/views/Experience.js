import React from 'react'

function Experience() {
    return (
        <div className='skills-section'>
            <h1>Experience</h1>
            <div className='m-t-30'>
                <div class="d-flex space-between flex-direction">
                    <div>
                        <img src="https://upjao.ai/wp-content/uploads/2023/10/Upjao-Logo-1.png" />
                    </div>
                    <div>
                        <h3 className='p-0 m-0'> Full Stack Developer </h3>
                        <h4 className='p-0 m-0'> Upjao Agrotech Private Limited </h4>
                        <h5 className='p-0 m-0'> Apr 2023 - Present </h5>
                    </div>
                </div>

                <div>
                    <ul>
                        <li>Implemented numerous APIs for various projects, including login
                            authentication systems with <b>AWS Cognito</b> and middleware using
                            Node.js. Expanded proficiency by creating some APIs in Go.</li>
                        <li>Transitioned backend data architecture from MongoDB to
                            <b>PostgreSQL</b>, achieving performance. Implemented <b>Redis</b> caching to
                            optimize data retrieval and enhance system efficiency.
                        </li>
                        <li>Engineered multiple web applications, including a comprehensive
                            Dashboard using <b>graph-based interfaces</b>, a Crop Trading Platform,
                            a Crop Scanner application, and a Warehouse tracking application
                            utilizing ReactJs.</li>
                        <li>Acquired a foundational understanding of Docker, Kubernetes,
                            <b>continuous integration and deployment (CI/CD) pipelines.</b>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience