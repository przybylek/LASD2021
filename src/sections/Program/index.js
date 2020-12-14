import React from 'react';
import './index.css';

function Program({history}) {
  return (
    <div className='PaperSubmission'>

    <table border="1">
      <tr><th colspan="2">Session 1 (Chair: <span class='author'>...</span>)</th></tr>
      <tr><td>11:10 - 11:20</td><td>Conference opening; <span class='author'>Adam Przybyłek</span></td></tr>
	  <tr><td>11:20 - 12:15</td><td>Agility Yesterday, Today & Tomorrow; <span class='author'>Philipp Diebold</span></td></tr>
	  <tr><td>12:15 - 13:00</td><td>Q&A:
		<ul>
			<li>Women in Agile: The Impact of Organizational Support for Women's Advancement on Teamwork Quality and Performance in Agile Software Development Teams<br /><span class='author'>Asli Yüksel Aksekili and Christoph Johann Stettina</span></li>
			<li>The state of Agile Software Development Teams during the Covid-19 pandemic<br /><span class='author'>Krzysztof Marek, Ewelina Wińska and Włodzimierz Dąbrowski</span></li>
			<li>The Sars-Cov-2 Pandemic and Agile Methodologies in Software Development: A Multiple Case Study in Germany<br /><span class='author'>Michael Neumann, Yevgen Bogdanov, Martin Lier and Lars Baumann</span></li>
			<li>Agile Project Development Facing Issues in Pandemic Situation the COVID-19<br /><span class='author'>Shariq Aziz Butt, Sanjay Misra, Muhammad Waqas Ajnum and Syed Areeb Hassan</span></li>
			<li>Implementing Lean Principles in Scrum to Adapt to Remote Work in a Covid-19 Impacted Software Team<br /><span class='author'>Leigh Griffin</span></li>
			<li>MSFL: A model for Fault Localization using Mutation-Spectra technique<br /><span class='author'>Arpita Dutta and Sangharatna Godboley</span></li>
		</ul>
	  </td></tr>
      <tr><th colspan="2">Coffee break </th></tr>
      <tr><th colspan="2">Session 2 (Chair: <span class='author'>...</span>)</th></tr>      
	  <tr><td>14:00 - 14:55</td><td>Pair Programming: An Empirical investigation in an Agile Software Development environment <br /><span class='author'>Sanjay Misra</span></td></tr>
	  <tr><td>14:55	- 15:40</td><td>Q&A:
		<ul>
			<li>Achieving Agility in IT Project Portfolios – a systematic literature review<br /><span class='author'>Joseph Puthenpurackal Chakko, Tim Huygh and Steven De Haes</span></li>
			<li>A Systematic Literature Review on Implementing Non-functional Requirements in Agile Software Development: Issues and Facilitating Practices<br /><span class='author'>Aleksander Jarzębowicz and Paweł Weichbroth</span></li>
			<li>Product Roadmapping Processes for an Uncertain Market Environment: A Grey Literature Review<br /><span class='author'>Stefan Trieflinger, Jürgen Münch, Emre Bogazköy, Jan Schneider, Patrick Eißler, Bastian Roling and Dominic Lang</span></li>
			<li>Experience vs Data: A Case for More Data-informed Retrospective Activities<br /><span class='author'>Christoph Matthies and Franziska Dobrigkeit</span></li>
			<li>Reducing the uncertainty of agile software development using a random forest classification algorithm<br /><span class='author'>Ewelina Wińska, Estera Kot and Włodzimierz Dąbrowski</span></li>
			<li>Business-Oriented approach to Requirements Elicitation in a Scrum project<br /><span class='author'>Michał Sosnowski, Michał Bereza, Yen Ying Ng</span></li>
		</ul>
	  </td></tr>
	  <tr><td>15:40 - 15:50</td><td>Conference closing </td></tr>
    </table>	
 
  
    </div>
  );
}

export default Program;