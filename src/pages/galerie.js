import React from 'react';
import Meta from '../modules/meta';
import './galerie.scss';

import cabinetAttente from '../images/cabinet/salle-attente-cabinet-psychologue-lyon.jpg';
import cabinetAttente2 from '../images/cabinet/salle-attente-cabinet-psychologue-lyon_2.jpg';
import cabinetAttente3 from '../images/cabinet/salle-attente-cabinet-psychologue-lyon_3.jpg';

import cabinetBureau from '../images/cabinet/bureau-cabinet-psychologue-lyon.jpg';
import cabinetBureau2 from '../images/cabinet/bureau-cabinet-psychologue-lyon_2.jpg';
import cabinetBureau3 from '../images/cabinet/bureau-cabinet-psychologue-lyon_3.jpg';
import cabinetBureau4 from '../images/cabinet/bureau-cabinet-psychologue-lyon_4.jpg';

const metadata = {
  title: 'Cabinet Psychologue à lyon | Psychologue Lyon 69002 | Morgane Laroche',
  description: 'Je vous reçois en consultations individuelles (enfants, adolescents, adultes) sur rendez-vous, les Lundis après-midi, Mercredis et Samedis matin. Les consultations ont lieu dans mon cabinet situé au 47 Rue de la bourse, dans le deuxième arrondissement de Lyon, à deux pas de l’arrêt de métro Cordeliers.'
};

const GaleriePage = () => (
  <div>
    <Meta title={metadata.title} description={metadata.description} />
  	<div className='container'>
  		<div className='container__galery'>
        <div className="galery__waiting">
          <img src={cabinetAttente} alt="cabinet psy à lyon, lyon psychologue, psychologue lyon, avis psychologue, psychologue clinicienne à Lyon 2, cabinet de psychologie à Lyon, psychologue clinicienne, psychologue ado lyon, psy lyon"/>
          <img src={cabinetAttente2} alt="cabinet psy à lyon, lyon psychologue, psychologue lyon, avis psychologue, psychologue enfant lyon, cabinet de psychologie à Lyon, psychologue clinicienne, psychologue ado lyon, psy lyon"/>
          <img src={cabinetAttente3} alt="cabinet psy à lyon, lyon psychologue, psychologue lyon, avis psychologue, psychologue clinicienne à Lyon 2, cabinet de psychologie à Lyon, psychologue ado lyon, psy lyon"/>

        </div>
        <div className="galery__office">
          <img src={cabinetBureau} alt="mon cabinet psy à lyon, lyon psychologue, psychologue lyon, avis psychologue, psychologue clinicienne à Lyon 2, psychologue ado lyon, psy lyon"/>
          <img src={cabinetBureau2} alt="bureau psy à lyon, bureau psychologue à lyon, lyon psychologue, psychologue lyon, avis psychologue, psychologue clinicienne à Lyon 2, cabinet de psychologie à Lyon, psychologue ado lyon, psy lyon"/>
          <img src={cabinetBureau3} alt="cabinet psy à lyon, lyon psychologue, psychologue lyon, avis psychologue, psychologue clinicienne à Lyon 2, cabinet de psychologie à Lyon, psychologue clinicienne, psychologue ado lyon, psy lyon"/>
          <img src={cabinetBureau4} alt="cabinet psy à lyon, lyon psychologue, psychologue lyon, psychologue enfant lyon, cabinet de psychologie à Lyon, psychologue ado lyon, psy lyon"/>
        </div>
  		</div>
  	</div>
  </div>
);

export default GaleriePage;
