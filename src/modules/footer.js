import React from 'react';
import { Link } from 'react-router-dom';
import JsonLd from './jsonLd';

import logoCalendar from '../images/calendar.svg';
import logoLocation from '../images/location.svg';
import logoPhone from '../images/phone.svg';

import './footer.scss';

const Footer = () => (
  <div className='footer'>
    <div className='footer__container'>
      <div className='footer__container-item'>
        <div className='item__content'>
          <img src={logoCalendar} alt='Ouverture cabinet psychologue lyon, lyon psychologue, psychologue lyon, avis psychologue, psychologue clinicienne à Lyon 2, cabinet de psychologie à Lyon, psychologue clinicienne' />
        </div>
        <p>Consultations sur rendez-vous</p>
        <ul className='u-list-style'>
          <li>Lundi de <span className='u-bold'>14h</span> à <span className='u-bold'>20h</span></li>
          <li>Mercredi de <span className='u-bold'>9h</span> à <span className='u-bold'>20h</span></li>
          <li>Samedi de <span className='u-bold'>9h</span> à <span className='u-bold'>13h</span></li>
        </ul>
      </div>
      <div className='footer__container-item'>
        <div className='item__content'>
          <img src={logoLocation} alt='adresse cabinet psychologue lyon, lyon psychologue, psychologue lyon, avis psychologue, psychologue clinicienne à Lyon 2, cabinet de psychologie à Lyon, psychologue clinicienne' />
        </div>
        <address itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
          <span itemProp='streetAddress'>47 Rue de la bourse </span><br />
          <span itemProp='postalCode'>69002</span><span itemProp='addressLocality'> LYON</span> <br />
          Métro Cordeliers <br />
          <Link className='footer__container-link' target='_blank' to='http://www.tcl.fr/var/tcl/storage/original/application/3874382c3c5c6bca67ba94b1e528062a.pdf'>Plan d’accès </Link>
        </address>
      </div>
      <div className='footer__container-item'>
        <div className='item__content'>
          <img src={logoPhone} alt='contact psychologue lyon, lyon psychologue, psychologue lyon, avis psychologue, psychologue clinicienne à Lyon 2, cabinet de psychologie à Lyon, psychologue clinicienne' />
        </div>
        <a className='footer__container-link' href='tel:+33674318234' itemProp='telephone'>Tél: 06.74.31.82.34 </a>
        <a className='footer__container-link footer__container-link--ellipsis' href="mailto:psychologue.morgane.laroche@gmail.com" itemProp='email'>psychologue.morgane.laroche@gmail.com</a>
      </div>
    </div>
    <JsonLd />
  </div>
);

export default Footer;
