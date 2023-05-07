import React from 'react'
import TypewriterComponent from 'typewriter-effect'

function AboutMe() {
  return (
    <div style={{backgroundImage:'radial-gradient(#E3F2C1, #83764F)', height:'100vh'}}>
      
      
      About Me <p>&#128512;</p>
      <TypewriterComponent
         options={{
          strings: ['ReactJS', 'NodeJs', "Flutter", 'MongoDB'],
          autoStart: true,
          loop: true,
        }}
      />
      </div>
  )
}

export default AboutMe