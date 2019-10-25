import React from 'react';
import Button from 'components/Button';

import { redirect } from 'utils/navigation';

import './index.css';

function PaperSubmission({history}) {
  return (
    <div className='PaperSubmission'>
      <p>
        Submissions will be handled in electronic format, using START system via the website
      </p>
      <div className='PaperSubmission__button'>
        <Button text='REGISTER NOW' onClickHandler={() => redirect('https://www.sigapp.org/sac/sac2019/')} isSecondary/>
      </div>
      <p>
        The author(s) name(s) and address(es) must NOT appear in the body of the 
        paper, and self-reference should be in the third person. Only the title 
        should be shown at the first page without the author's information. All 
        papers will be fully refereed and undergo a blind review process by at 
        least three referees. The conference proceedings will be published by ACM. 
        Hence, all accepted papers should be submitted in ACM 2-column camera-ready 
        format for publication in the symposium proceedings. 
      </p>
      <div className='PaperSubmission__button'>
        <Button text='DOWNLOAD TEMPLATES' onClickHandler={() => redirect('https://www.sigapp.org/sac/sac2019/')} isSecondary/>
      </div>
    </div>
  );
}

export default PaperSubmission;