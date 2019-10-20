import React, { Component } from 'react';
import { Icon, List } from "semantic-ui-react";
import * as d3 from 'd3';
import data from 'documents/committee2021.csv';

import './index.css';

class Committee extends Component {
  constructor() {
    super();
    this.state= {
      parsedCommittee: [],
    }
  }

  componentDidMount() {
    let parsedData = [];
    d3.csv(data, (data) => parsedData.push(data));
    this.setState({parsedCommittee: parsedData})
  }



  render() {
    const { parsedCommittee } = this.state;
    return (
      <div className='Committee'>
        <List celled>
          {parsedCommittee.map(item => {
            console.log(item)
            return (
              <List.Item>
                <Icon name='' />
                <List.Content>
                  <List.Header>{item['Attende']}</List.Header>
                  {`${item['University']}, ${item['Country']}`}
                </List.Content>
              </List.Item>
            );
          })}
        </List>
      </div>
    );
  }
}

export default Committee;