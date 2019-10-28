import React from 'react';
import { List, Icon } from 'semantic-ui-react'

const topics = [
  'Combining lean and agile methods for software development',
  'Lean and agile requirements engineering',
  'Scaling agile methods',
  'Distributed agile software development',
  'Challenges of migrating to lean and agile methods',
  'Balancing agility and discipline',
  'Agile development for safety systems',
  'Lean and agility at the enterprise level',
  'Conflicts in agile teams',
  'Lean and agile project production and management',
  'Collaborative games in software processes',
  'Lean and agile coaching',
  'Managing knowledge for agility and collaboration',
  'Tools and techniques for lean and agile development',
  'Measurement and metrics for agile projects, agile processes, and agile teams',
  'Innovation and creativity in software engineering',
  'Variability across the software life cycle',
  'Industrial experiments, case studies, and experience reports related to all of the above topics',
  'Gamification',
  'Affective Software Engineering'
]

function TopicsInterests() {
  return(
    <List size='huge'>
      {topics.map(item => {
        return (
          <List.Item>
              <Icon name='check' />
              {item}
          </List.Item>
        )
      })}
    </List>
  );
}

export default TopicsInterests;
