import React from 'react';
import Meta from '../modules/meta';
import Link from 'gatsby-link';

const metadata = {
  title: 'Qu\'est-ce qu\'un psychologue clinicien ? | Psychologue clinicienne | Morgane Laroche',
  description: 'Morgane Laroche Psychologue Clinicienne à Lyon Enfants - Adolescents - Adultes'
};

const Psychologue = () => (
  <div className='container container--page'>
    <Meta title={metadata.title} description={metadata.description} />
		<div className='container__block'>
			<h1 className='container__block-title container__block-title--nomarge'>Qu'est-ce qu'un psychologue clinicien ?</h1>
      <h2 className='container__block-subtitle'>A propos de la psychologie clinique …</h2>
      <div className='container__block-slogan'>
        <p className='u-italic slogan__content'>
          « Elle est une psychologie individuelle et sociale, normale et pathologique ; elle concerne le nouveau-né,
          l’enfant, l’adolescent, le jeune adulte, l’homme mûr, l’être vieillissant et enfin mourant. Le psychologue
          clinicien remplit trois grandes fonctions : de diagnostic, de formation, d’expert […] »
        </p>
        <span>D. Anzieu</span>
      </div>
			<p className='u-paragraphe'>
				Autrement dit, elle s’adresse à <span className='u-bold'>tous</span>.
			</p>
			<p className='u-paragraphe'>
        A travers sa pratique, le psychologue clinicien tente de déceler certains états de souffrance dans le but de
        proposer une thérapeutique permettant des aménagements positifs chez l’individu.
			</p>
			<p className='u-paragraphe'>
        Comme en médecine, le travail clinique obéit à une méthode et à une analyse, les « outils » du clinicien
        allant de l’entretien clinique, à la passation de tests (projectifs, psychométriques) et d’échelles, ou encore
        l’utilisation de médiations thérapeutiques telles que l’hypnose, la relaxation, le Photolangage© …
			</p>
			<p className='u-paragraphe u-mb'>
        Cette rencontre entre le psychologue et son patient est celle de deux individus singuliers, forts de leurs
        expériences et parcours de vie mutuels. En cela, le psychologue va avant tout travailler à partir des émotions
        (celles du patient mais les siennes également) et accorder une grande place à la subjectivité : ce que le
        patient va exprimer à un moment donné de son histoire, dans un contexte précis, ce dont il va être
        particulièrement à l’écoute.
			</p>
      <h2 className='container__block-subtitle'>Un exercice protégé</h2>
      <p className='u-italic u-paragraphe'>
        « Le respect de la personne dans sa dimension psychique est un droit inaliénable. Sa reconnaissance fonde
        l’action des psychologues »
      </p>
			<p className='u-paragraphe'>
        L’usage professionnel du titre de psychologue est défini par l’article 44 de la loi n°855-772 du 25 Juillet
        1985 complété par l’article 57 de la loi n°2002-303 du 4 Mars 2002 qui rend obligatoire l’inscription sur les
        listes ADELI.
			</p>
			<p className='u-paragraphe'>
        Puisque <span className='u-bold'>le titre est protégé</span>, est uniquement autorisé à exercer, tout individu titulaire d’une Licence de
        Psychologie, d’une maîtrise et d’un Master 2 (anciennement nommé D.E.S.S pour le Master
        « professionnel » ou D.E.A. pour la mention « recherche »).
			</p>
			<p className='u-paragraphe'>
        Par ailleurs, l’exercice est soumis à un certain nombre de règles que vous pouvez consulter via ce lien :
        <Link className='container__block-link u-bold' to='http://www.cncdp.fr/index.php/code-de-deontologie/code-de-deontologie-2012' target='_blank'> Code de déontologie des psychologues</Link>.
			</p>
			<p className='u-paragraphe'>
				Quelques principes fondamentaux :
			</p>
			<ul className='container__content-list u-mb'>
				<li>Respect des droits de la personne</li>
				<li>Compétence</li>
				<li>Responsabilité et autonomie</li>
				<li>Rigueur</li>
				<li>Intégrité et probité</li>
				<li>Respect du but assigné</li>
			</ul>
			<h2 className='container__block-subtitle'>Un psychologue, des psychologues</h2>
      <p className='u-paragraphe'>
        Les enseignements de la psychologie et sa pratique sont nombreux et diffèrent d’un praticien à l’autre.
        Chaque psychologue s’appuie sur une ou plusieurs méthode(s), courant(s) de pensée, et inspiration(s)
        théorique(s) qui lui parlent, auxquels il a été sensibilisé tout au long de sa formation et de son parcours.
      </p>
      <p className='u-paragraphe'>
        Par ailleurs, cette démarche de soin et d’accompagnement naît avant tout d’une rencontre entre deux
        individus, dont chacun revêt des traits, des caractéristiques différents qui fondent leur singularité.
      </p>
      <p className='u-paragraphe'>
        Pour qu’un travail d’introspection et de réflexion commune puissent se tisser, il est essentiel que « le courant
        passe » et qu’une alliance thérapeutique s’installe.
      </p>
		</div>
	</div>
);
export default Psychologue;
