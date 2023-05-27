import React, { useEffect, useState } from 'react'
import TypewriterComponent from 'typewriter-effect'
import Wave from 'react-wavify'

function AboutMe() {
  const [borderRadius, setBorderRadius] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newBorderRadius = [
        getRandomBorderRadius(),
        getRandomBorderRadius(),
        getRandomBorderRadius(),
        getRandomBorderRadius()
      ];
      setBorderRadius(newBorderRadius);
    }, 2000); // Change border radius every 2 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const getRandomBorderRadius = () => {
    return Math.floor(Math.random() * 50) + 10; // Generate a random border radius value between 10 and 60
  };

  return (
    <div style={{ backgroundImage: 'radial-gradient(#E3F2C1, #83764F)', height: '90.3vh' }}>

      <div style={{ height: 'inherit' }} className='display-flex justify-content-between flex-direction'>
        <div className='mt-2 profile-Container'>
          <div>
            <p style={{fontSize: '30px'}}>Hello Everyone &#128075; ,</p>
            <p style={{display: 'inline'}}>I'm </p><TypewriterComponent 
              style={{display: 'inline'}}
              options={{
                strings: ['ReactJS', 'NodeJs', "Flutter", 'MongoDB'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <div className="animated-component">
            <img
              className="animated-image"
              src="https://drive.google.com/uc?export=view&id=1LMQihmHu0D7we_MFk2MmxVID8gjwK11C"
              style={{
                marginTop: '20px',
                borderTopLeftRadius: `${borderRadius[0]}%`,
                borderTopRightRadius: `${borderRadius[1]}%`,
                borderBottomRightRadius: `${borderRadius[2]}%`,
                borderBottomLeftRadius: `${borderRadius[3]}%`
              }}
              alt="profile"
            />
          </div>
        </div>

        <p style={{textAlign:"justify", padding: '10px'}}> 
          Hi, My name is Yashaswi Anand. I'm a Mobile app developer, website developer,
          and technology enthusiast. Love working on new and exciting projects,
          sharing my knowledge with others, and always being willing to learn more.
          Mobile App Development: Flutter framework as well as Kotlin language.
          Website Development: HTML, CSS , JavaScript , NodeJs.
          Final year Computer Science Student and passionate to
          <span class="text-highlight">Web development</span> and
          <span class="text-highlight">App development</span> in
          kotlin language and flutter framework.
        </p>

        <Wave style={{ height: '35%' }} fill='skyblue'
          paused={false}
          options={{
            height: 100,
            amplitude: 50,
            speed: 0.3,
            points: 3
          }}
        />
      </div>

    </div>
  )
}

export default AboutMe