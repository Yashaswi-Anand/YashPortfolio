import React from 'react'
import VerticalProgressBar from '../Widget/VerticaleProgressBar'

function Project() {
  return (
    <div style={{backgroundImage:'radial-gradient(#FFFBF5, #C3ACD0)', height:'100vh'}}>
       <div className="progress-bars">
      <div><VerticalProgressBar color={'red'} percentage={50} />MongoDB</div>
      <div><VerticalProgressBar percentage={75} />SQL</div>
      <VerticalProgressBar percentage={25} />
    </div>
    </div>
  )
}

export default Project