import React from 'react';

const JsonLd = () => {
  const data = [
    {
      "@context": "http://schema.org",
      "@type": "Organization",
      "url": "http://psychologue-morganelaroche.fr",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lyon, France",
        "postalCode": "69002",
        "streetAddress": "47 Rue de la bourse"
      },
      "contactPoint": [
        { "@type": "ContactPoint",
          "telephone": "+33674318234",
          "contactType": "customer service"
        }
      ],
      "description": "Je vous reçois en consultations individuelles (enfants, adolescents, adultes) sur rendez-vous, les Lundis après-midi, Mercredis et Samedis matin. Les consultations ont lieu dans mon cabinet situé au 47 Rue de la bourse, dans le deuxième arrondissement de Lyon, à deux pas de l’arrêt de métro Cordeliers.",
      "email": "psychologue.morgane.laroche@gmail.com",
      "telephone": "+33674318234",
      "name": "Morgane Laroche",
      "sameAs": [
        "http://www.lyon-psychologue.com/",
        "https://fr.linkedin.com/in/morgane-laroche-a8700b138",
        "https://plus.google.com/u/1/102102364543935278586",
        "https://www.psychologue.net/cabinets/morgane-laroche",
        "https://annuaire.118712.fr/Rhone-69/Lyon-69002/Laroche-morgane-(psychologue-clinicienne)-0674318234_9E0020S00004F90300C90751S",
        "http://www.psychologuelyon.com/psychologue/morgane-laroche-psychologue-clinicienne-a-lyon.html",
        "https://www.yelp.fr/biz/morgane-laroche-lyon?osq=Psychologue"
      ]
    },
    {
      "@context": "http://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@id": "http://psychologue-morganelaroche.fr/",
          "name": "Accueil"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@id": "http://psychologue-morganelaroche.fr/psychologie",
          "name": "Qu'est-ce qu'un psychologue clinicien ?"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@id": "http://psychologue-morganelaroche.fr/me-connaitre",
          "name": "Me connaître"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@id": "http://psychologue-morganelaroche.fr/pourquoi-consulter",
          "name": "Pourquoi consulter ?"
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@id": "http://psychologue-morganelaroche.fr/qui-consulter",
          "name": "Qui consulter ?"
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@id": "http://psychologue-morganelaroche.fr/therapie",
          "name": "Les étapes de la thérapie"
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@id": "http://psychologue-morganelaroche.fr/tarifs",
          "name": "Tarifs"
        }
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@id": "http://psychologue-morganelaroche.fr/contacts",
          "name": "Contacts"
        }
      }
    ]}
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
};

export default JsonLd;
