module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-github-api`,
      options: {
  
        // token: required by the GitHub API
        token: process.env.NODE_ENV,
  
        // GraphQLquery: defaults to a search query
        graphQLQuery: `query {
          user (login:"joamessina"){
          repositories(first:50,orderBy:{field:STARGAZERS, direction:DESC},privacy:PUBLIC){
            edges {
              node {
                id
                name
                description
                isPrivate
                url
                }
              }
            }
          }
        }`,
  
        // variables: defaults to variables needed for a search query
        variables: {
          misVariables: 'cuando las haga'
        }
      },
    },
  ],
}
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
