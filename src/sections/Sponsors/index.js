import React from 'react';
import logoAgileAlliance from 'images/Agile_Alliance_Logo_Colour_rectangle.jpg';
import './index.css';

function Sponsors() {
  return (
    <div className='Sponsors'>
      <p>
	<img className='Sponsors__logoAgileAlliance' src={logoAgileAlliance} alt='Agile Alliance' />
        <a href="https://www.agilealliance.org">Agile Alliance</a> is a nonprofit global member organization dedicated to promoting the concepts of Agile software development as outlined in the Agile Manifesto. With more than 75,000 members and subscribers around the globe, Agile Alliance is driven by the principles of Agile methodologies and the value delivered to developers, business, and end users. Agile Alliance <a href="https://www.agilealliance.org/events" target="_blank">organizes and supports events</a> to bring the Agile community together on an international scale.
      </p>
    </div>
  );
}

export default Sponsors;