import React from 'react';
import Meta from '../modules/meta';
import './contact.scss';

const metadata = {
  title: 'Contacts | Psychologue clinicienne à Lyon 2 | Morgane Laroche',
  description: 'Adresse du cabinet. Coordonnées. Plan d’accès. Lien du site. Matricules. Mon cabinet situé au 47 Rue de la bourse, dans Lyon 2, à deux pas du métro Cordeliers.'
};

const Contact = () => (
  <div className='container container--page'>
    <Meta title={metadata.title} description={metadata.description} />
    <div className='container__block'>
      <h1 className='container__block-title'>CONTACTS</h1>
      <div  className='container__block-contact'>
        <div className='contact-item__map'>
          <iframe
            title='Cabinet psychologue à Lyon'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.355537958922!2d4.834810215629182!3d45.76406452140511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eaf89b5569f7%3A0xf43b1f6b6e7165ad!2s47+Rue+de+la+Bourse%2C+69002+Lyon!5e0!3m2!1sfr!2sfr!4v1508966235673'
            allowFullScreen
          />
        </div>
        <div className='contact-item'>
          <ul className='contact-item__list'  itemProp='address' itemScope itemType='http://schema.org/PostalAddress'>
            <li>
              47 Rue de la bourse
            </li>
            <li>LYON 2</li>
            <li>Métro Cordeliers</li>
            <li><a className='container__block-link' target="_blank" href="http://www.tcl.fr/var/tcl/storage/original/application/3874382c3c5c6bca67ba94b1e528062a.pdf">Plan d’accès </a></li>
          </ul>

          <ul className="contact-item__list">
            <li>
              <a className='container__block-link' href='tel:+33674318234' itemProp='telephone'><span>Tél:</span> 06.74.31.82.34 </a>
            </li>
            <li>
              <a className='container__block-link container__block-link--ellipsis' href='mailto:psychologue.morgane.laroche@gmail.com' itemProp='email'><span>E-mail:</span> psychologue.morgane.laroche@gmail.com</a>
            </li>
          </ul>

          <ul className='contact-item__list'>
            <li>Numéro ADELI : 699336418</li>
            <li>Numéro Siret : 833 159 585 00011</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
