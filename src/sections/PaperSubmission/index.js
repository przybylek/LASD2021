import React from 'react';
import Button from 'components/Button';

import { redirect } from 'utils/navigation';

import './index.css';

function PaperSubmission({history}) {
  return (
    <div className='PaperSubmission'>
      <p>
        We invite research papers in two categories: Full Papers up to 20 pages, and Short Papers up to 10 pages. Papers must be in English and present original, not already published research. Submissions must conform to Springer's LNBIP format which can be found at:
      </p>
      <p>
         <a href="https://www.springer.com/gp/authors-editors/conference-proceedings/conference-proceedings-guidelines">https://www.springer.com/gp/authors-editors/conference-proceedings/conference-proceedings-guidelines</a> 
      </p>
      <p>
        Submission is done through the EasyChair Conference System at the following page:
      </p>  
      <div className='PaperSubmission__button'>
        <Button text='SUBMIT A PAPER' onClickHandler={() => redirect('https://easychair.org/conferences/?conf=lasd2020')} isSecondary/>
      </div>
      <p>After the paper submission has been successfully completed, authors will receive an automatic confirmation e-mail.</p>
      <p>
        Each submission will be reviewed by at least three program committee members. To facilitate the double-blind reviewing, authors are kindly requested to provide the paper WITHOUT any reference to any of the authors, including the authors' personal details, the acknowledgments section of the paper and any other reference that may disclose the authors' identity.
      </p>
      <p>
        Accepted papers will be published in the conference proceedings by Springer in their Lecture Notes on Business Information Processing (LNBIP) series.
      </p>
      <p>
        LNBIP volumes are made available to the following indexing services: Web of Science; Scopus, EI Engineering Index; ACM Digital Library; DBLP; Google Scholar.
      </p>


    </div>
  );
}

export default PaperSubmission;