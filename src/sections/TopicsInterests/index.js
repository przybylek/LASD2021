import React from 'react';
import { List, Icon } from 'semantic-ui-react'

const topics = [
  'Agile teams during Covid-19',
  'Combining lean and agile methods for software development',
  'Lean and agile requirements engineering',
  'Scaling agile methods',
  'Distributed teams in Agile Software Development',
  'Challenges of migrating to lean and agile methods',
  'Balancing agility and discipline',
  'Agile development for safety systems',
  'Lean and agility at the enterprise level',
  'Conflicts in agile teams',
  'Lean and agile project production and management',
  'Collaborative games in Software Process Improvement',
  'Lean and agile coaching',
  'Managing knowledge for agility and collaboration',
  'Tools and techniques for lean and agile development',
  'Measurement and metrics for agile projects, agile processes, and agile teams',
  'Innovation and creativity in software engineering',
  'Variability across the software life cycle',
  'Gamification',
  'Industrial experiments, case studies, and experience reports related to all of the above topics'
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
