module.exports = {
  siteMetadata: {
    title: `Vertigo Rock Climbing`,
    description: `Vertigo Rock Climbing is a rock climbing project in San Cristobal de Las Casas, Chiapas, Mexico.`,
    spanish: `Vertigo Rock Climbing es un proyecto de escalada en roca en San Cristóbal de Las Casas, Chiapas, México.`,
    author: `Simon Blurton`,
    siteUrl: `https://vertigo.com/`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vertigo Rock Climbing`,
        short_name: `Vertigo`,
        start_url: `/`,
        background_color: `#84C0CA`,
        theme_color: `#84C0CA`,
        display: `minimal-ui`,
        icon: `src/assets/icons/logo.svg`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/languages`,
        languages: [`en`, `es`],
        defaultLanguage: `en`,
        redirect: true,
      },
    },
  ],
}
