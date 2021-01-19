module.exports = {
  pathPrefix: `/mini-gatsbyv2-material-kit-react`,
  siteMetadata: {
    title: 'CampOwl Business Solutions',
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-material-ui',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'CampOwl Business Solutions',
        short_name: 'CampOwl Tech',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/img/favicon3.png', // This path is relative to the root of the site.
      },
    },
  ],
}