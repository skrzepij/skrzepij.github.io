/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Radomir Skrzepij`,
    author: `UpCore`,
    description: `Strona osobista`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-42236657-2",
        head: true,
      },
    },
  ],
}
