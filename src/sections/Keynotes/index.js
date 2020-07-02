import React from 'react';

import { redirect } from 'utils/navigation';

import './index.css';

function Keynotes({history}) {
  return (
    <div className='PaperSubmission'>
	<p>
	<dl>
	  <dt>Philipp Diebold</dt>
	  <dd>Before starting his own consulting, coaching and training company, called <a href="https://www.bagilstein.de/">Bagilstein</a>, Philipp was working as a project manager and researcher at the Fraunhofer Institut for Experimental Software Engineering IESE. Working in the area of agile processes, methods and practices, he published a lot around this topics in different conferences, journals and books. He finished his PhD on identifying the right degree of agility at the Technical University of Kaiserslautern. With his own company his is now coaching different customers for more than 2 years in agile transformations still keeping the eye on the leading edge of research.</dd>	
	</dl> 
	</p>



    </div>
  );
}

export default Keynotes;