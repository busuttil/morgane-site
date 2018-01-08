import React from 'react';
import Meta from '../modules/meta';

const metadata = {
  title: 'Qui consulter ? | Psychologue clinicienne à Lyon 2 | Morgane Laroche',
  description: 'Soins psychiques : différents professionnels. Quels sont-ils ? Quels sont leurs champs et leurs modalités d\'intervention ? Quelles formations ont-ils suivies ?'
};

const QuiConsulter = () => (
  <div className='container container--page'>
    <Meta title={metadata.title} description={metadata.description} />
    <div className='container__block'>
      <h1 className='container__block-title'>QUI CONSULTER ?</h1>
      <p className='u-paragraphe'>
        Couramment, beaucoup se questionnent sur ce qui différencie le psychologue du psychiatre, du
        psychanalyste et du psychothérapeute. Ces fonctions ne sont pas antinomiques. En effet, il est possible
        d’avoir le titre de psychologue et d’être à la fois psychanalyste.
      </p>
      <p className='u-paragraphe'>
        Si ces professionnels occupent une fonction commune consistant à soigner le psychisme, ils différent sur
        plusieurs points sur lesquels je vous propose de revenir brièvement.
      </p>
      <p className='u-paragraphe u-mb'>
        Mieux les connaître vous permettra de mieux choisir le professionnel qui pourra répondre à votre demande.
      </p>
      <h2 className='container__block-subtitle'>La psychiatrie</h2>
      <p className='u-paragraphe u-mb'>
        Il s’agit d’une <span className='u-bold'>discipline médicale</span> qui s’intéresse aux maladies mentales (diagnostic, pronostic et traitement)
        et leur prévention. Le psychiatre, de par son titre et son statut de médecin est autorisé à prescrire un
        traitement médicamenteux.
      </p>
      <h2 className='container__block-subtitle'>La psychothérapie</h2>
      <p className='u-paragraphe'>
        La psychothérapie est une <span className='u-bold'>modalité de prise en charge psychologique</span> d’un trouble psychique. Elle peut
        s’adresser à un individu, mais aussi à un groupe d’individus. Ce trouble peut provenir d’un déséquilibre
        purement psychologique ou s’exprimer comme la répercussion d’un événement autre (deuil, rupture,
        annonce de diagnostic, traumatisme …)
      </p>
      <p className='u-paragraphe'>
        En France, le titre de psychothérapeute n’est pas protégé. Certaines universités étrangères forment les
        étudiants à des techniques psychothérapiques mais en France, cette formation est extra-universitaire et
        correspond à une spécialisation postérieure au diplôme (diplôme universitaire et interuniversitaire).
      </p>
      <p className='u-paragraphe u-mb'>
        Cela n’exclut pas le fait qu’il s’agit d’une pratique possédant une intention thérapeutique, un champ
        d’expertise et un lien direct avec une conception claire et déontologique de l’humain.
      </p>
      <h2 className='container__block-subtitle'>La psychanalyse</h2>
      <p className='u-paragraphe'>
        Le terme « psychanalyse » que l’on doit à Sigmund Freud, son fondateur, traduit un <span className='u-bold'>procédé
        d’investigation psychologique des processus inconscients</span>. Autrement dit, il s’agit d’une méthode
        thérapeutique et d’un ensemble de connaissances théoriques qui rendent compte d’un fonctionnement
        psychique.
      </p>
      <p className='u-paragraphe'>
        Il s’agit d’une approche parmi d’autres : systémie, phénoménologie, thérapies cognitivo-comportementales,
        hypnothérapie ... En effet, la psychologie se partage en plusieurs écoles aux positions différentes.
      </p>
      <p className='u-paragraphe'>
        En France, son titre n’est pas protégé. En revanche, il est possible de se former à la psychanalyse en
        devenant membre d’une société psychanalytique, impliquant comme condition <span className='u-italic'>sine qua non</span> l’expérience de
        son analyse personnelle.
      </p>
    </div>
  </div>
);
export default QuiConsulter;
