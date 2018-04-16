import React from 'react';
import Link from 'gatsby-link';

import './head.scss';

const Head = () => (
  <div className='head'>
    <Link className='head__content' to="/">
      <p className='head__content-title'>Morgane Laroche</p>
      <h1 className='head__content-description'>Psychologue Clinicienne à Lyon</h1>
      <p className='head__content-information'>Enfants - Adolescents - Adultes</p>
    </Link>
    <div className='head__content-separator' />
  </div>
);

export default Head;
