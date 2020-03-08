module.exports = {
  siteMetadata: {
    title: `Elements Culmyca`,
    description: `Fest of JC BOSE UST`,
    author: `anshul goyal`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elements Culmyca`,
        short_name: `EC`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ff3f01`,
        display: `standalone`,
        icon: `src/images/logo_colored.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
