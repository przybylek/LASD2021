import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import './index.css';

function ImportantDates() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        animate
        contentStyle={{ background: '#333940' , color: '#CCE5FE' }}
        contentArrowStyle={{ borderRight: '7px solid  #333940'}}
        iconStyle={{ background: '#333940', color: '#CCE5FE' }}
        date='November 12, 2019'
      >
        <h3 className="vertical-timeline-element-title">Submission of technical session proposals</h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        animate
        contentStyle={{ background: '#333940' , color: '#CCE5FE' }}
        contentArrowStyle={{ borderRight: '7px solid  #333940'}}
        iconStyle={{ background: '#333940', color: '#CCE5FE' }}
        date="May 15, 2020"
      >
        <h3 className="vertical-timeline-element-title">Paper submission</h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        animate
        contentStyle={{ background: '#333940' , color: '#CCE5FE' }}
        contentArrowStyle={{ borderRight: '7px solid  #333940'}}
        iconStyle={{ background: '#333940', color: '#CCE5FE' }}
        date="June 9, 2020"
      >
        <h3 className="vertical-timeline-element-title">Position paper submission</h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        animate
        contentStyle={{ background: '#333940' , color: '#CCE5FE' }}
        contentArrowStyle={{ borderRight: '7px solid  #333940'}}
        iconStyle={{ background: '#333940', color: '#CCE5FE' }}
        date="June 30, 2020"
      >
        <h3 className="vertical-timeline-element-title">Author notification</h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        animate
        contentStyle={{ background: '#333940' , color: '#CCE5FE' }}
        contentArrowStyle={{ borderRight: '7px solid  #333940'}}
        iconStyle={{ background: '#333940', color: '#CCE5FE' }}
        date="July 15, 2020"
      >
        <h3 className="vertical-timeline-element-title">
          Final paper submission and registration
        </h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        animate
        contentStyle={{ background: '#333940' , color: '#CCE5FE' }}
        contentArrowStyle={{ borderRight: '7px solid  #333940'}}
        iconStyle={{ background: '#333940', color: '#CCE5FE' }}
        date="September 6-9, 2020"
      >
        <h3 className="vertical-timeline-element-title">Conference date</h3>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default ImportantDates;