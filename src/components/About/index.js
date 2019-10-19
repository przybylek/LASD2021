import React from 'react';

import './index.css';

function About() {
  return (
    <div className='About'>
      <div className='About__title'>
        About
      </div>
      <div className='About__content'>
        <p>
          The evolution of software development life cycles is driven by the 
          perennial quest on how to organize projects for better productivity 
          and better quality. The traditional software development projects, which 
          followed well-defined plans and detailed documentations, were unable to 
          meet the dynamism, unpredictability and changing conditions that 
          characterize rapidly changing business environment. Agile methods overcame 
          these limits by considering that requirements are not static but dynamic, 
          while customers are unable to definitively state their needs up front. However, 
          the advent of agile methods divided the software engineering community into opposing 
          camps of traditionalists and agilists. After more than a decade of debate 
          and experimental studies a majority consensus has emerged that each 
          method has its strengths as well as limitations, and is appropriate for 
          specific types of projects, while numerous organizations have evolved 
          toward the best balance of agile and plan-driven methods that fits 
          their situation.
        </p>
        <p>
          In more recent years, the software industry has started to look at lean 
          software development as a new approach that could complement agile 
          methods. Lean development further expands agile software development by 
          adopting practices from lean manufacturing. Lean emphasizes waste 
          elimination by removing all non-value-adding activities.
        </p>
        <p>
          The objective of LASD is to extend the state-of-the-art in lean and 
          agile software development by providing a platform at which industry 
          practitioners and academic researchers can meet and learn from each other.
        </p>
      </div>
    </div>
  );
}

export default About;