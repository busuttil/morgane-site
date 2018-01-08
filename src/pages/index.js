import React from 'react';
import Link from 'gatsby-link';
import Meta from '../modules/meta';

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
  				Le psychologue est le professionnel qui intervient lorsque vous ressentez une souffrance, un mal-être.
  			</h2>
  			<p className='u-paragraphe'>
  				Il peut vous accompagner dans une <span className='u-bold'>difficulté ponctuelle</span> (certains parleraient de « thérapie de soutien ») en
  				vous aidant à mobiliser vos ressources psychiques, vos capacités d’adaptation et en vous aidant à mettre en
  				place des techniques pour dépasser celle-ci.
  			</p>
  			<p className='u-paragraphe'>
  				Il peut également vous accompagner dans un processus de <span className='u-bold'>changement</span> (certains parleraient de « psychothérapie ») qui peut s’exprimer de façon très différente selon les individus et les situations.
  			</p>
  			<p className='u-paragraphe'>Quelle que soit votre demande, le psychologue vous accueille dans un <span className='u-bold'>cadre protégé</span>, vous écoute et vous
  				accompagne dans le respect de la <span className='u-bold'>neutralité</span>, sans jugement, tout en respectant le principe de
  				<span className='u-bold'> confidentialité</span>.
  			</p>
  			<p className='u-paragraphe'>Je vous reçois en
  				<span className='u-bold'> consultations individuelles (enfants, adolescents, adultes)</span> les Lundis après-midi, Mercredis et Samedis matin.
  			</p>
  			<h2 className='u-paragraphe u-text__mea'>
  				Mon cabinet se situe à Cordeliers, dans&nbsp;
  				<Link className='container__block-link' target='_blank' to='http://www.tcl.fr/var/tcl/storage/original/application/3874382c3c5c6bca67ba94b1e528062a.pdf'>
            le deuxième arrondissement de Lyon.
  				</Link>
  			</h2>
  		</div>
  	</div>
  </div>
)

export default IndexPage
