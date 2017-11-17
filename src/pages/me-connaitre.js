import React from 'react';
import Meta from '../modules/meta';
import Link from 'gatsby-link';

const metadata = {
  title: 'Me connaitre | Psychologue clinicienne | Morgane Laroche',
  description: 'Ma formation. Spécialisations, approches et méthodes. Quelques axes de travail.'
};

const MeConnaitre = () => (
  <div className='container container--page'>
    <Meta title={metadata.title} description={metadata.description} />
		<div className='container__block'>
			<h1 className='container__block-title container__block-title--nomarge'>ME CONNAITRE</h1>
      <h2 className='container__block-subtitle'>Ma formation</h2>
			<p className='u-paragraphe'>
        Diplômée d’un Master 2 en Psychopathologie et Psychologie clinique <Link className='container__block-link' to='http://www.univ-lyon2.fr/' target='_blank'>(Université Lumière de Lyon II)</Link>,
        je me suis d’abord familiarisée à l’approche intégrative
        au cours de mes trois années de Licence réalisées à la <Link  className='container__block-link' to='https://www.u-bourgogne.fr/' target='_blank'>faculté de Bourgogne</Link>.
        Cette approche propose de s’appuyer sur différentes méthodes, courants de pensées et outils en mettant l’accent sur leur
        complémentarité. Elle considère qu’aucune technique, à elle seule, n’est suffisamment complète et adaptée
        et qu’il est préférable de les unifier afin de pouvoir répondre à chaque individu et aux problématiques qui
        l’animent.
			</p>
			<p className='u-paragraphe u-mb'>
        Par la suite, j’ai souhaité m’intéresser davantage au <span className='u-bold'>courant psychanalytique Freudien</span>, qui m’a
        particulièrement transportée, en conservant néanmoins un intérêt certain pour d’autres approches. En effet, il
        n’existe pas de « méthode miracle » qui conviendrait à tous mais plutôt un éventail d’approches permettant
        de s’adapter à la demande et aux besoins de chacun.
			</p>
      <h2 className='container__block-subtitle'>Quelques axes de travail</h2>
			<p className='u-paragraphe'>
        Ma pratique s’inspire grandement du courant analytique en laissant libre court à la parole, aux choses que l’on ne
        dit pas au premier abord mais qui s’entendent au-delà des mots. Mon écoute laisse une grande place à l'approche des processus inconscients, à la
        rêverie, aux émotions que l’on retient ou au contraire, qui nous débordent.
			</p>
			<p className='u-paragraphe'>
        J’accorde une grande importance à l’écoute de la <span className='u-bold'>dimension psychosomatique</span> en envisageant le corps
        comme une scène du psychisme. Quand la parole ne suffit plus ou semble faire impasse pour un individu,
        c’est parfois à travers le corps et ses maux, que nos difficultés, nos angoisses s’expriment. En s’y intéressant
        de plus près, les prémices d’une parole, d'une souffrance jusqu’ici indicibles vont pouvoir naître.
			</p>
			<p className='u-paragraphe'>
        Durant mon parcours, je me suis particulièrement intéressée aux <span className='u-bold'>problématiques addictives</span> en les
        envisageant comme autant de tentatives pour « faire face » à des épreuves douloureuses de séparations, de
        pertes, de deuils (pour ne citer que celles-ci) qui peuvent parfois sembler indépassables pour un individu.
        Cet espace, dans lequel je vous accueille, invite à libérer la parole afin d’accéder à un travail de mise en
        mots de ces vécus douloureux et des sentiments qui l’accompagnent.
			</p>
      <p className='u-paragraphe'>
        Aussi, il m’apparaît essentiel d’entendre la parole de l’autre en tant qu’individu issu d’une culture spécifique
        et de son appartenance à un environnement social et familial. J’accorde donc une place particulière à
        l’écoute et à la prise en compte de la <span className='u-bold'>dimension inter et transculturelle</span> en ce qu’elle participe à la
        construction de l’identité (histoire familiale, héritage culturel, transmission généalogique), donc au
        développement du sujet. Elle peut apporter un éclairage face à des problématiques dont les nœuds sont
        parfois difficiles à démêler.
      </p>
		</div>
	</div>
);
export default MeConnaitre;
