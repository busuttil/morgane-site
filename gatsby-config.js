module.exports = {
  siteMetadata: {
    title: `Psychologue clinicienne | Morgane Laroche | Cordeliers, Lyon 2ème`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    { resolve: `gatsby-plugin-google-analytics`, options: { trackingId: 'UA-109941553-1', anonymize: true } },
    { resolve: `gatsby-plugin-google-tagmanager`, options: { id: 'GTM-52NWD8J' } }
  ],
}
