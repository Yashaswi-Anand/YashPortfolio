import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience() {
  return (
<div style={{backgroundImage:'radial-gradient(#FFFBF5, #C3ACD0)', height:'87.5vh'}}>
      <div>
        <h1>INTERNSHIP</h1>
        <VerticalTimeline
          layout={'1-column-left'}
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'radial-gradient(#C3ACD0, #C3ACD0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #C3ACD0' }}
            date="July 2021 - Dec 2021"
            iconStyle={{ background: 'radial-gradient(#C3ACD0, #C3ACD0)', color: '#fff' }}
          // icon={}
          >
            <div style={{ textAlign: 'start' }}>
              <h3 className="vertical-timeline-element-title">Liveasy</h3>
              <h4 className="vertical-timeline-element-subtitle">Online</h4>
              
            </div>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
</div>
  )
}

export default Experience