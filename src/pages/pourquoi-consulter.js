import React from 'react';
import illustration from '../images/pourquoi-consulter.jpg';
import Meta from '../modules/meta';

const metadata = {
  title: 'Pourquoi consulter ? | Psychologue clinicienne | Morgane Laroche',
  description: 'Quelles émotions, situations ou événements de vie peuvent nous conduire à venir consulter un psychologue ? Une liste non-exhaustive. Spécificité de cette démarche.'
};

const PourquoiConsulter = () => (
  <div>
    <Meta title={metadata.title} description={metadata.description} />
    <div className='container container--page'>
  		<h1 className='container__block-title'>POURQUOI CONSULTER ?</h1>
  		<div className='container__content'>
  			<div className='container__illustration'>
  				<img itemProp='image' src={illustration} alt='pourquoi consulter' />
  			</div>
  			<div className='container__block container__block-intro'>
  				<p className='u-paragraphe'>
  	        Ma pratique s’adresse à tous et à <span className='u-bold'>tous les âges de la vie</span>.
  				</p>
  				<p className='u-paragraphe'>
  	        <span className='u-bold'>Toute situation de souffrance</span>, de mal être, toute période de changement, de crise, de mutation, en lien avec
  	        la sphère personnelle, professionnelle, affective ou familiale, mérite d’être abordée lors d’une consultation
  	        avec un psychologue.
  				</p>
  			</div>
  		</div>
  	</div>

  	<div className='container'>
  		<div className='container__block'>
  			<p className='u-paragraphe u-bold'>Je vous reçois et vous accompagne pour faire face à des situations telles que :</p>
  			<ul className='container__content-list u-mb'>
  				<li>la perte, le deuil d’un proche</li>
  				<li>l’annonce d’une maladie, d’un handicap, l’accompagnement d’un proche</li>
  				<li>une rupture, un divorce difficile(s)</li>
  				<li>un changement dans la cellule familiale : naissance, mariage, remariage</li>
  				<li>un traumatisme suite à un accident, une agression physique ou verbale</li>
  				<li>des difficultés professionnelles : perte d’emploi, mutation, reconversion, harcèlement …</li>
  				<li>des difficultés relationnelles, familiales, conjugales</li>
  				<li>un manque d’estime de soi, de confiance, d’affirmation</li>
  				<li>l’anxiété, l’angoisse, l’irritabilité</li>
  				<li>des peurs ou phobies</li>
  				<li>des troubles de l’alimentation</li>
  				<li>des troubles du sommeil</li>
  				<li>des problèmes d’addiction(s) et de dépendance(s)</li>
  			</ul>
  			<p className='u-paragraphe u-highlight'>
  				Et plus particulièrement chez l’enfant …
  			</p>
  			<ul className='container__content-list u-mb'>
  				<li>des troubles du comportement : hyperactivité, retrait, inhibition, agressivité</li>
  				<li>des troubles du développement : apprentissage de la marche, du langage, de la propreté</li>
  				<li>
  					des difficultés scolaires : manque d’attention, de concentration, difficultés dans les apprentissages,
  					phobie scolaire&nbsp;…
  				</li>
  			</ul>
  		<p className='u-italic u-paragraphe'>Cette liste de difficultés ou manifestations qui peuvent nous conduire à consulter est non exhaustive et ne
  saurait rendre compte de la spécificité de cette démarche de soin, propre à chaque individu.</p>
  		</div>
  	</div>
  </div>
);
export default PourquoiConsulter;
