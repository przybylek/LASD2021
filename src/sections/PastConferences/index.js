import React from 'react';
import { Card } from 'semantic-ui-react';

import Button from 'components/Button';
import { redirect } from 'utils/navigation';

import './index.css';

const conferences = [
  {
    header: "LASD@FedCSIS'20",
    year: '2020',
    website: 'https://fedcsis.org/2020/lasd',
    proceedings: ''
  },
  {
    header: "LASD@FedCSIS'19",
    year: '2019',
    website: 'https://www.fedcsis.org/2019/lasd',
    proceedings: 'https://www.annals-csis.org/Volume_18/#H4LASD'
  },
  {
    header: "LASD@FedCSIS'18",
    year: '2018',
    website: 'https://www.fedcsis.org/2018/lasd',
    proceedings: 'https://annals-csis.org/Volume_15/#H4LASD'
  },
  {
    header: "LASD@FedCSIS'17",
    year: '2018',
    website: 'https://www.fedcsis.org/2017/lasd',
    proceedings: 'https://annals-csis.org/Volume_11/#H4LASD'
  },
]

function PastConferences() {
  return (
    <Card.Group>
      {conferences.map(element => {
        return (
        <Card>
          <Card.Content>
            <Card.Header>{element.header}</Card.Header>
            <Card.Meta>{element.year}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button text='WEBSITE' isSecondary onClickHandler={() => redirect(element.website)} />
              <Button text='PROCEEDINGS' isSecondary onClickHandler={() => redirect(element.proceedings)} />
            </div>
          </Card.Content>
        </Card>
        );
      })}
    </Card.Group>
  );
}

export default PastConferences;