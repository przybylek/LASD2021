import React from 'react';
import Moment from 'react-moment';

import './index.css';
import logoLNBIP_LASD21 from 'images/LNBIP_LASD21.jpg';


class Program extends React.Component {
  state = new Date();

  componentDidMount() {
        this.interval = setInterval(() => {
            const now = new Date();
            this.setState(now);
        }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
        const localDataTime = this.state;
      
        return (
    <div className='PaperSubmission'>
      <p>
        <img className='Submissions__logoLNBIP_LASD' src={logoLNBIP_LASD21} alt='logo LNBIP_LASD21' />
<h1>Lean and Agile Software Development</h1>
<h2>5th International Conference, LASD 2021, Virtual Event, January 23, 2021, Proceedings</h2>
<h1>Free online access to <a href="https://link.springer.com/book/10.1007/978-3-030-67084-9">LNBIP, volume 408</a></h1>
      </p>

    <p>Time zone of the conference: GMT+1 (Central European Standard Time)</p>
    <p><Moment interval={1000} format="YYYY/MM/DD HH:mm:ss">{localDataTime}</Moment></p>


    <table border="1">
      <tr><th colspan="2">Session 1 (Chair: <span class='author'>Aleksander Jarzębowicz</span>)</th></tr>
      <tr><td>11:10 - 11:20</td><td>Conference opening<br /><span class='author'>Adam Przybyłek</span></td></tr>
	  <tr><td>11:20 - 12:15</td><td>Agility Yesterday, Today & Tomorrow (followed by a 10-minute discussion)<br /><span class='author'>Philipp Diebold</span><br /></td></tr>
	  <tr><td>12:15 - 13:00</td><td>Q&A:
		<ul>
			<li><a href="https://www.youtube.com/watch?v=08ilsdxNm3E">Women in Agile: The Impact of Organizational Support for Women's Advancement on Teamwork Quality and Performance in Agile Software Development Teams</a><br /><span class='author'>Asli Yüksel Aksekili and Christoph Johann Stettina</span></li>
			<li><a href="https://youtu.be/JV34Q3TMqYI">The state of Agile Software Development Teams during the COVID-19 pandemic</a><br /><span class='author'>Krzysztof Marek, Ewelina Wińska and Włodzimierz Dąbrowski</span></li>
			<li><a href="https://youtu.be/_IJ_RmxBnbo">The Sars-Cov-2 Pandemic and Agile Methodologies in Software Development: A Multiple Case Study in Germany</a><br /><span class='author'>Michael Neumann, Yevgen Bogdanov, Martin Lier and Lars Baumann</span></li>
			<li><a href="https://youtu.be/FJfhhx9Xajc">Agile Project Development Facing Issues in Pandemic Situation the COVID-19</a><br /><span class='author'>Shariq Aziz Butt, Sanjay Misra, Muhammad Waqas Ajnum and Syed Areeb Hassan</span></li>
			<li><a href="https://youtu.be/1_N3cGu5mrE">Implementing Lean Principles in Scrum to Adapt to Remote Work in a COVID-19 Impacted Software Team</a><br /><span class='author'>Leigh Griffin</span></li>
			<li><a href="https://drive.google.com/file/d/1AnfTw66JM9uWjUBiSJI7x30o5hzcuN_z/view?usp=sharing">MSFL: A model for Fault Localization using Mutation-Spectra technique</a><br /><span class='author'>Arpita Dutta and Sangharatna Godboley</span></li>
		</ul>
	  </td></tr>
      <tr><th colspan="2">Break </th></tr>
      <tr><th colspan="2">Session 2 (Chair: <span class='author'>Jakub Miler</span>)</th></tr>      
	  <tr><td>14:00 - 14:55</td><td>Pair Programming: An Empirical investigation in an Agile Software Development environment (followed by a 10-minute discussion)<br /><span class='author'>Sanjay Misra</span></td></tr>
	  <tr><td>14:55	- 15:40</td><td>Q&A:
		<ul>
			<li><a href="https://youtu.be/j-xti21T30c">Achieving Agility in IT Project Portfolios – a systematic literature review</a><br /><span class='author'>Joseph Puthenpurackal Chakko, Tim Huygh and Steven De Haes</span></li>
			<li><a href="https://youtu.be/PjQ8U_DxUaA">A Systematic Literature Review on Implementing Non-functional Requirements in Agile Software Development: Issues and Facilitating Practices</a><br /><span class='author'>Aleksander Jarzębowicz and Paweł Weichbroth</span></li>
			<li><a href="https://youtu.be/z5eRZzDp_sg">Product Roadmapping Processes for an Uncertain Market Environment: A Grey Literature Review</a><br /><span class='author'>Stefan Trieflinger, Jürgen Münch, Emre Bogazköy, Jan Schneider, Patrick Eißler, Bastian Roling and Dominic Lang</span></li>
			<li><a href="https://youtu.be/F_7E2KoRh_4">Experience vs Data: A Case for More Data-informed Retrospective Activities</a><br /><span class='author'>Christoph Matthies and Franziska Dobrigkeit</span></li>
			<li><a href="https://youtu.be/MGivIfk-_pE">Reducing the uncertainty of agile software development using a random forest classification algorithm</a><br /><span class='author'>Ewelina Wińska, Estera Kot and Włodzimierz Dąbrowski</span></li>
			<li>Business-Oriented approach to Requirements Elicitation in a Scrum project<br /><span class='author'>Michał Sosnowski, Michał Bereza, Yen Ying Ng</span></li>
		</ul>
	  </td></tr>
	  <tr><td>15:40 - 15:50</td><td>Conference closing </td></tr>
    </table>	 
    </div>
        );
  }

}

export default Program;