import React from 'react';
import Button from 'components/Button';

import { redirect } from 'utils/navigation';

import './index.css';

function PaperSubmission({history}) {
  return (
    <div className='PaperSubmission'>
      <p>
        We invite research papers in two categories: Full Papers up to 18 pages, and Short Papers up to 8 pages. Papers must be in English and present original, not already published research. 
	Authors should consult Springer's authors' guidelines and use their proceedings templates, either for LaTeX or for Word, for the preparation of their papers. Springer encourages authors to include their ORCIDs in their papers. In addition, the corresponding author of each paper, acting on behalf of all of the authors of that paper, must complete and sign a Consent-to-Publish form. The corresponding author signing the copyright form should match the corresponding author marked on the paper. Once the files have been sent to Springer, changes relating to the authorship of the papers cannot be made.
      </p>
      <p>
         <a href="https://www.springer.com/gp/authors-editors/conference-proceedings/conference-proceedings-guidelines">https://www.springer.com/gp/authors-editors/conference-proceedings/conference-proceedings-guidelines</a> 
      </p>
      <p>
        Submission is done through the EasyChair Conference System. After the paper submission has been successfully completed, authors will receive an automatic confirmation e-mail.
      </p>  
      <div className='PaperSubmission__button'>
        <Button text='SUBMIT A PAPER' onClickHandler={() => redirect('https://easychair.org/conferences/?conf=lasd2021')} isSecondary/>
      </div>
      <p>
        Each submission will be reviewed by at least three program committee members. To facilitate the double-blind reviewing, authors are kindly requested to provide the paper WITHOUT any reference to any of the authors, including the authors' personal details, the acknowledgments section of the paper and any other reference that may disclose the authors' identity.
      </p>
      <p>
        Accepted papers will be published in the conference proceedings by Springer in their Lecture Notes on Business Information Processing (LNBIP) series. 
	The proceedings will be available at:
      </p>
      <p>
         <a href="https://link.springer.com/conference/lasd">https://link.springer.com/conference/lasd</a> 
      </p>
      <p>
        LNBIP volumes are made available to the following indexing services: Web of Science; Scopus, EI Engineering Index; ACM Digital Library; DBLP; Google Scholar.
      </p>


    </div>
  );
}

export default PaperSubmission;