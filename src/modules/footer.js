import React from 'react';
import { Link } from 'react-router-dom';

import logoCalendar from '../images/calendar.svg';
import logoLocation from '../images/location.svg';
import logoPhone from '../images/phone.svg';
import './footer.scss';

const Footer = () => (
  <div className='footer'>
    <div className='footer__container'>
      <div className='footer__container-item'>
        <div className='item__content'>
          <img src={logoCalendar} alt='horraire' />
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
          <img src={logoLocation} alt='adresse' />
        </div>
        <address>
          47 Rue de la bourse <br />
          69002 LYON <br />
          Métro Cordeliers <br />
          <Link className='footer__container-link' target='_blank' to='http://www.tcl.fr/var/tcl/storage/original/application/3874382c3c5c6bca67ba94b1e528062a.pdf'>Plan d’accès </Link>
        </address>
      </div>
      <div className='footer__container-item'>
        <div className='item__content'>
          <img src={logoPhone} alt='numéro de téléphone' />
        </div>
        <a className='footer__container-link' href='tel:+33674318234'>Tél: 06.74.31.82.34 </a>
        <a className='footer__container-link footer__container-link--ellipsis' href="mailto:psychologue.morgane.laroche@gmail.com">psychologue.morgane.laroche@gmail.com</a>
      </div>
    </div>
  </div>
);

export default Footer;
