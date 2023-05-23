import { CCard } from '@coreui/react'
import React from 'react'
import DataTable from 'react-data-table-component';
import customTableStyles from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Education() {
  return (
    <div style={{ backgroundImage: 'radial-gradient(#FFFBF5, #C3ACD0)', }}>
      <div>

        <VerticalTimeline
          layout={'1-column-left'}
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'radial-gradient(#C3ACD0, #C3ACD0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #C3ACD0' }}
            date="2018 - 2022"
            iconStyle={{ background: 'radial-gradient(#C3ACD0, #C3ACD0)', color: '#fff' }}
          // icon={}
          >
            <div style={{ textAlign: 'start' }}>
              <h3 className="vertical-timeline-element-title">BTech</h3>
              <h4 className="vertical-timeline-element-subtitle">Motihari College Of Engineering, Motihari</h4>
              <p>Computer Science And Engineering</p>
              <p>CGPA: 8.7</p>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'radial-gradient(#C3ACD0, #C3ACD0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #C3ACD0' }}
            date="2018 - 2022"
            iconStyle={{ background: 'radial-gradient(#C3ACD0, #C3ACD0)', color: '#fff' }}
          // icon={}
          >
            <div style={{ textAlign: 'start' }}>
              <h3 className="vertical-timeline-element-title">12th</h3>
              <h4 className="vertical-timeline-element-subtitle">Maharaja College, Ara</h4>
              <p>Science</p>
              <p>Percentage: 70.2 %</p>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'radial-gradient(#C3ACD0, #C3ACD0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #C3ACD0' }}
            date="2018 - 2022"
            iconStyle={{ background: 'radial-gradient(#C3ACD0, #C3ACD0)', color: '#fff' }}
          // icon={}
          >
            <div style={{ textAlign: 'start' }}>
              <h3 className="vertical-timeline-element-title">10th</h3>
              <h4 className="vertical-timeline-element-subtitle">Gyan Bharti Education Complex, Patna</h4>
              <p>General</p>
              <p>CGPA: 9.4</p>
            </div>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Education