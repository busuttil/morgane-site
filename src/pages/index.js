import React from 'react';
import Meta from '../modules/meta';
import Link from 'gatsby-link';

import './home.scss';

const metadata = {
  title: 'Psychologue Clinicienne | Cordeliers, Lyon 2ème | Morgane Laroche',
  description: 'Je vous reçois en consultations individuelles (enfants, adolescents, adultes) sur rendez-vous, les Lundis après-midi, Mercredis et Samedis matin. Les consultations ont lieu dans mon cabinet situé au 47 Rue de la bourse, dans le deuxième arrondissement de Lyon, à deux pas de l’arrêt de métro Cordeliers.'
};

const IndexPage = () => (
  <div>
    <Meta title={metadata.title} description={metadata.description} />
    <div className='mea'>
  		<div className='mea__slogan'>
  			<p className='slogan'>« Qui mieux que vous sait vos besoins ? Apprendre à se connaître est le premier des
  			soins »</p>
  			<span className='u-bold'>Jean de la Fontaine</span>
  		</div>
  	</div>
  	<div className='container'>
  		<div className='container__block'>
  			<h1 className='container__block-title'>ACCUEIL</h1>
  			<p className='u-paragraphe'>
  				Il n’est pas rare d’entendre de la part d’un proche :
  				<span className='u-italic'> « Je vais voir quelqu’un »</span>.
  				Mais que se cache-t- il derrière cette expression ?
  			</p>
  			<p className='u-paragraphe'>
  				Face aux difficultés que tout individu peut être amené à rencontrer au cours de sa vie, il est parfois nécessaire de
  				demander l’aide d’un professionnel.
  			</p>
  			<h2 className='u-paragraphe u-text__mea'>
  				Le <Link className="u-text-decoration" to="/therapie">psychologue</Link> est l’un des professionnels qui peut intervenir lorsque vous traversez une période difficile occasionnant une souffrance, lorsque vous exprimez une volonté de changement ou plus simplement, le souhait de mieux vous connaître.
  			</h2>
  			<p className='u-paragraphe'>
  				Il peut vous accompagner dans une <span className='u-bold'>difficulté ponctuelle</span> (certains parleraient de « thérapie de soutien ») en
  				vous aidant à mobiliser vos ressources psychiques, vos capacités d’adaptation et en vous aidant à mettre en
  				place des techniques pour dépasser celle-ci.
  			</p>
  			<p className='u-paragraphe'>
  				Il peut également vous accompagner dans un processus de <span className='u-bold'>changement</span> (certains parleraient de « psychothérapie ») qui peut s’exprimer de façon très différente selon les individus et les situations.
  			</p>
  			<p className='u-paragraphe'>Quelle que soit votre demande, le <Link className="u-text-decoration" to="/therapie">psychologue</Link> vous accueille dans un <span className='u-bold'>cadre protégé</span>, vous écoute et vous
  				accompagne dans le respect de la <span className='u-bold'>neutralité</span>, sans jugement, tout en respectant le principe de
  				<span className='u-bold'> confidentialité</span>.
  			</p>
  			<p className='u-paragraphe'>Je vous reçois en&nbsp;
  				<span className='u-bold'><Link className="u-text-decoration" to="/contacts">consultations individuelles (enfants, adolescents, adultes)</Link></span> les Lundis après-midi, Mercredis et Samedis matin.
  			</p>
  			<h2 className='u-paragraphe u-text__mea'>
  				Mon cabinet se situe à Cordeliers, dans&nbsp;
  				<a className='container__block-link' target='_blank' href='http://www.tcl.fr/var/tcl/storage/original/application/3874382c3c5c6bca67ba94b1e528062a.pdf'>
            le deuxième arrondissement de Lyon.
  				</a>
  			</h2>
  		</div>
  	</div>
  </div>
)

export default IndexPage
