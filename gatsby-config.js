require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Project Plugin (test)`,
    description: "A blog like no other blog",
    author: "Ruairí Douglas",
  },
  plugins: [
    `gatsby-transformer-remark`,
    'gatsby-plugin-image',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/generated_articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/generated_images`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-newrelic-test'
  ],
}
