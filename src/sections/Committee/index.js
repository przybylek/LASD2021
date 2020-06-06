import React, { Component } from 'react';
import { Icon, List } from "semantic-ui-react";

import './index.css';

class Committee extends Component {
  constructor() {
    super();
    this.state= {
      data:[]
    }

    this.getData = this.getData.bind(this);
  }

 componentWillMount() {
    var csvFilePath = require("../../documents/committee.csv");
    var Papa = require("papaparse/papaparse.min.js");
    Papa.parse(csvFilePath, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: this.getData
    });
  }

  getData(result) {
    const data = result.data;
    this.setState({data: data});
  }

  render() {
    const { data } = this.state;
    return (
      <div className='Committee'>
        <List celled>
          {data.map(item => {
            return (
              <List.Item>
                <Icon name='user' />
                <List.Content>
                  <List.Header>{`${item['lastName']}, ${item['firstName']}`}</List.Header>
                  {`${item['univ']}, ${item['country']}`}
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