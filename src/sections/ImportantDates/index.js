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
        date="October 1, 2020 (strict deadline)"
      >
        <h3 className="vertical-timeline-element-title"><del>Paper submission</del></h3>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        animate
        contentStyle={{ background: '#333940' , color: '#CCE5FE' }}
        contentArrowStyle={{ borderRight: '7px solid  #333940'}}
        iconStyle={{ background: '#333940', color: '#CCE5FE' }}
        date="November 1, 2020"
      >
        <h3 className="vertical-timeline-element-title">Reviews due</h3>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        animate
        contentStyle={{ background: '#333940' , color: '#CCE5FE' }}
        contentArrowStyle={{ borderRight: '7px solid  #333940'}}
        iconStyle={{ background: '#333940', color: '#CCE5FE' }}
        date="November 4, 2020"
      >
        <h3 className="vertical-timeline-element-title">Author notification</h3>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        animate
        contentStyle={{ background: '#333940' , color: '#CCE5FE' }}
        contentArrowStyle={{ borderRight: '7px solid  #333940'}}
        iconStyle={{ background: '#333940', color: '#CCE5FE' }}
        date="November 18, 2020"
      >
        <h3 className="vertical-timeline-element-title">
          Final paper submission
        </h3>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        animate
        contentStyle={{ background: '#333940' , color: '#CCE5FE' }}
        contentArrowStyle={{ borderRight: '7px solid  #333940'}}
        iconStyle={{ background: '#333940', color: '#CCE5FE' }}
        date="December 31, 2020"
      >
        <h3 className="vertical-timeline-element-title">
          Pre-recorded video submission
        </h3>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        animate
        contentStyle={{ background: '#333940' , color: '#CCE5FE' }}
        contentArrowStyle={{ borderRight: '7px solid  #333940'}}
        iconStyle={{ background: '#333940', color: '#CCE5FE' }}
        date="January 23, 2021"
      >
        <h3 className="vertical-timeline-element-title">Conference date</h3>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default ImportantDates;