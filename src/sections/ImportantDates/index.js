import React from 'react'
import { Icon } from 'semantic-ui-react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

function ImportantDates() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#333940', color: '#CCE5FE' }}
        contentArrowStyle={{ borderRight: '7px solid  #CCE5FE' }}
        iconStyle={{ background: '#333940', color: '#CCE5FE' }}
        date="2011 - present"
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#333940', color: '#CCE5FE' }}
        contentArrowStyle={{ borderRight: '7px solid  #CCE5FE' }}
        iconStyle={{ background: '#333940', color: '#CCE5FE' }}
        date="2011 - present"
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#333940', color: '#CCE5FE' }}
        contentArrowStyle={{ borderRight: '7px solid  #CCE5FE' }}
        iconStyle={{ background: '#333940', color: '#CCE5FE' }}
        date="2011 - present"
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project Management, Team Leading
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default ImportantDates;