import React from 'react';
import './Domains.css';
import { programsData } from '../data/programsData';

import Technical from '../data/Technical.png';
import Management from '../data/Management.png';
import Design from '../data/Design.png';
import Editorial from '../data/Editorial.png';
import Outreach from '../data/Media.png';



function Domains() {
  return (

    <div className="Domains" id="Domains">
      {/*Header*/}
      <div className="Domains-header">
        <span> Our </span>
        <span className='stroke-text'>Domains</span>
      </div>
      <p className='text'>We believe in hands on learning and freedom of work.
        {'\n'}
        Hence all of our core committee members are provided with selection
        {'\n'}
        of five domains to find where their true passion lies..
      </p>

      <div className="Domains-categories">

        {programsData.map((program) => (
          <div className="category">
            {program.heading === 'Technical' && <img src={Technical} alt=" " className="responsive-image" />}
            {program.heading === 'Management' && <img src={Management} alt="" className="responsive-image" />}
            {program.heading === 'Design' && <img src={Design} alt="" className="responsive-image" />}
            {program.heading === 'Editorial' && <img src={Editorial} alt="" className="responsive-image" />}
            {program.heading === 'Media' && <img src={Outreach} alt="" className="responsive-image" />}
          
          
          <span>{program.details}</span>

          </div>
          


        ))}

      </div>

    </div>

  );
}

export default Domains