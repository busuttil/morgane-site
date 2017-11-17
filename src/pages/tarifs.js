import React from 'react';
import Meta from '../modules/meta';

const metadata = {
  title: 'Tarifs | Psychologue clinicienne | Morgane Laroche',
  description: 'Tarifs. Modalités de paiement. Remboursement des consultations. Retards et Annulations.'
};

const Tarifs = () => (
  <div>
    <Meta title={metadata.title} description={metadata.description} />
    <div className='container container--page'>
      <div className='container__block'>
        <h1 className='container__block-title'>TARIFS</h1>
        <ul className='container__content-list u-mb'>
          <li>
            <span className='u-bold'>Fréquence</span> : chaque semaine ou toutes les deux semaines, à définir en fonction de vos besoins et de
            vos possibilités financières
          </li>
          <li><span className='u-bold'>Durée de l’entretien</span> : 45 minutes</li>
          <li><span className='u-bold'>Honoraires</span> : 50 € (40 € pour les étudiants et demandeurs d’emplois)</li>
        </ul>
      </div>
    </div>
    <div className='container'>
      <div className='container__block'>
        <h1 className='container__block-title container__block-title--nomarge'>Informations pratiques</h1>
        <h2 className='container__block-subtitle'>Modalités de Paiement</h2>
        <p className='u-paragraphe u-mb'>
          Le paiement des consultations s’effectue à l’issue de chaque séance, soit par chèque soit en espèces (pas de CB).
        </p>
        <h2 className='container__block-subtitle'>Remboursement des Consultations</h2>
        <p className='u-paragraphe u-mb'>
          La Sécurité Sociale ne rembourse pas les séances chez un psychologue mais certaines mutuelles proposent le
          remboursement de plusieurs séances. Pour en savoir plus, n’hésitez pas à vous renseigner auprès de votre
          mutuelle.
        </p>
        <h2 className='container__block-subtitle'>Retards et Annulations</h2>
        <p className='u-paragraphe'>
          En cas de retard de la part d’un patient, la séance n’est pas prolongée en compensation.
          En cas d’annulation ou de demande de déplacement d’un rendez-vous, je souhaite être prévenue 48h à
          l’avance (jours ouvrables). En deçà de ce délai, la consultation vous sera due et devra être réglée la séance
          suivante.
        </p>
      </div>
    </div>
  </div>
);
export default Tarifs;
