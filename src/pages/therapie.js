import React from 'react';
import illustration from '../images/psychologue-lyon.jpg';
import Meta from '../modules/meta';

const metadata = {
  title: 'Les étapes de la thérapie | Psychologue clinicienne à Lyon 2 | Morgane Laroche',
  description: 'Comment se déroule la première consultation ? Faire connaissance. Définir et clarifier votre demande. Définir un cadre. Durée de la thérapie.'
};

const Therapie = () => (
  <div className='container container--page container--withimage'>
    <Meta title={metadata.title} description={metadata.description} />
    <h1 className='container__block-title'>LES ÉTAPES DE LA THÉRAPIE</h1>
    <div className='container__content container__content-therapie'>
      <div className='container__illustration-left'>
        <img itemProp='image' src={illustration}
          alt='les étapes de la thérapie, lyon psychologue, psychologue lyon, avis psychologue, psychologue clinicienne à Lyon 2, cabinet de psychologie à Lyon, psychologue clinicienne'
        />
      </div>
      <div className='container__block-right'>
        <p className='u-paragraphe'>
          La <span className='u-bold'>première consultation</span> est l'occasion de faire connaissance et n’est gage d’aucune obligation à débuter une thérapie.
        </p>
        <p className='u-paragraphe'>
          Elle vous permet d’exprimer librement et déposer les différents éléments qui motivent votre démarche : les
          difficultés rencontrées dans votre quotidien, les événements récents qui ont bousculé le cours des choses ou
          événements passés qui font retour, en somme, tous les points qui, selon vous, font barrage à votre
          épanouissement personnel. Il s’agit de <span className='u-bold'>définir ensemble votre demande</span>.
        </p>
      </div>
    </div>
    <div className='container__content'>
      <div className='container__block-bottom'>
        <p className='u-paragraphe'>
          Ainsi, nous reformulons et établissons un aperçu des différents aspects que vous souhaitez mettre en
          réflexion pour aller vers un « mieux-être » et améliorer, soulager votre quotidien. Il s’agit de « traduire »,
          clarifier votre demande afin <span className='u-bold'>d’évaluer vos « objectifs ».</span>
        </p>
        <p className='u-paragraphe'>
          Cette première consultation est également l’occasion d’aborder ensemble vos <span className='u-bold'>questionnements éventuels </span>
          sur mon cadre de travail : mes modalités d’intervention, les méthodes et outils susceptibles d’intervenir et de
          venir soutenir la thérapie …
        </p>
        <p className='u-paragraphe'>
          A l’issue de ce premier contact, nous convenons ensemble de la pertinence et la possibilité de débuter une thérapie.
        </p>
        <p className='u-paragraphe'>
          Si tel est votre souhait, nous définissons un <span className='u-bold'>cadre</span> : fréquence des entretiens et honoraires.
        </p>
        <p className='u-paragraphe'>
          Dans certains cas, il m’est également possible de vous diriger vers un confrère.
        </p>
        <p className='u-paragraphe'>
          <span className='u-bold'>La durée d’une thérapie n’est jamais prévisible à l’avance</span> et varie d’un individu à l’autre. Vous êtes
          libre d’y mettre un terme à tout moment.
        </p>
      </div>
    </div>
  </div>
);
export default Therapie;
