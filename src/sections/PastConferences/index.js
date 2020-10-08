import React from 'react';
import Card from 'components/Card';

import Button from 'components/Button';
import { redirect } from 'utils/navigation';

import './index.css';

const conferences = [
  {
    header: "LASD@FedCSIS'20",
    year: 'Sofia 2020',
    website: 'https://www.fedcsis.org/2020/lasd',
    proceedings: 'https://annals-csis.org/Volume_21/#H4LASD'
  },
  {
    header: "LASD@FedCSIS'19",
    year: 'Leipzig 2019',
    website: 'https://www.fedcsis.org/2019/lasd',
    proceedings: 'https://www.annals-csis.org/Volume_18/#H4LASD'
  },
  {
    header: "LASD@FedCSIS'18",
    year: 'Poznan 2018',
    website: 'https://www.fedcsis.org/2018/lasd',
    proceedings: 'https://annals-csis.org/Volume_15/#H4LASD'
  },
  {
    header: "LASD@FedCSIS'17",
    year: 'Prague 2017',
    website: 'https://www.fedcsis.org/2017/lasd',
    proceedings: 'https://annals-csis.org/Volume_11/#H4LASD'
  },
]

function PastConferences() {
  return (
    <div className='PastConferences'>
      {conferences.map(element => {
        return (
          <Card isSecondary={false}>
            <div className='PastConferences__header'>{element.header}</div>
            <div className='PastConferences__year'>{element.year}</div>
            <div className='PastConferences__buttons'>
              <div className='PastConferences__singleButton'>
                <Button text='WEBSITE' isSecondary onClickHandler={() => redirect(element.website)} />
              </div>
              <div className='PastConferences__singleButton'>
                <Button text='PROCEEDINGS' isSecondary onClickHandler={() => redirect(element.proceedings)} />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default PastConferences;