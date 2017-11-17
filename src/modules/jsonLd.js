import React from 'react';

const JsonLd = () => {
  const data = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lyon, France",
      "postalCode": "69002",
      "streetAddress": "47 Rue de la bourse"
    },
    "description": "Je vous reçois en consultations individuelles (enfants, adolescents, adultes) sur rendez-vous, les Lundis après-midi, Mercredis et Samedis matin. Les consultations ont lieu dans mon cabinet situé au 47 Rue de la bourse, dans le deuxième arrondissement de Lyon, à deux pas de l’arrêt de métro Cordeliers.",
    "email": "psychologue.morgane.laroche@gmail.com",
    "telephone": "+33674318234",
    "name": "Morgane Laroche",
    "sameAs": [
      "http://www.lyon-psychologue.com/",
      "https://fr.linkedin.com/in/morgane-laroche-a8700b138",
      "https://plus.google.com/u/1/102102364543935278586"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
};

export default JsonLd;
