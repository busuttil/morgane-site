import React from 'react';
import Helmet from 'react-helmet';
import favicon from '../images/favicon.ico';

const Meta = ({ title, description }) => {
  let canonical;
  if (typeof window !== `undefined`) {
   canonical = document.location.href;
  }

  return (
    <Helmet>
      <html lang="fr" hrefLang="fr" amp />
      <meta charSet='utf-8' />
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content='psychologue, psy, psychotherapie, rhone-alpes, lyon, cabinet psychologue, 69002, lyon, psychotherapie adulte,
        psychotherapie enfant, psychotherapie adolescent, psychotherapie ado, therapie adulte, therapie enfant, therapie adolescent,
        consulter un professionnel, souffrance, mal être, difficultés, accompagnement, soutien psychologique,
        thérapie, changement, cadre, neutralité, confidentialité, consultations individuelles'
      />
      <meta itemProp="name" name='author' content='Morgane Laroche' />
      <meta name="robots" content='follow, index' />
      <meta name="copyright" content='Nicolas Busuttil' />
      <meta itemProp='email' name='email' content='psychologue.morgane.laroche@gmail.com' />
      <link rel='canonical' href={canonical} />
      <link rel='icon' href={favicon} type='image/x-icon' />
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-109554894-1"></script>
      <link href="https://fonts.googleapis.com/css?family=Allura" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Crimson+Text:400,700" rel="stylesheet" />
    </Helmet>
  )
};

export default Meta;
