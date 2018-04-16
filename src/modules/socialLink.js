import React from 'react';
import logoMap from '../images/googlemap.svg';
import logoBusiness from '../images/googleplus.svg';

import './social-link.scss';

const SocialLink = () => (
  <div className='social-link'>
    <div className='social-link__container'>
      <div className='social-link__container-name'>
        <h1>Psychologue Lyon, Cordeliers 69002 | Morgane Laroche</h1>
      </div>
      <div className='social-link__container-link'>
        <a className='link' href="https://www.google.fr/maps/place/Psychologue+clinicienne+et+Psychoth%C3%A9rapeute+%C3%A0+Lyon,+Morgane+Laroche/@45.76404,4.8348212,17z/data=!3m1!4b1!4m5!3m4!1s0x47f4eaf883685445:0x8f38e3a6b95f3e0e!8m2!3d45.76404!4d4.8370099?dcr=0" alt="google business psychologue lyon" target="_blank">
          <img src={logoMap} alt="google business psychologue lyon, psychologue cordeliers, psychologue lyon 2" />
        </a>
        <a className='link' href="https://plus.google.com/u/1/102102364543935278586" alt="google page psychologue lyon" target="_blank">
          <img src={logoBusiness} alt="google page psychologue lyon, psychologue cordeliers, psychologue lyon 2" />
        </a>
      </div>
    </div>
  </div>
);

export default SocialLink;
