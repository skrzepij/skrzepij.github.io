/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Radomir Skrzepij`,
    author: `UpCore`,
    authorUrl: `http://upco.re`,
    description: `Strona osobista`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // Configure SASS to process Tailwind
        postCssPlugins: [
          require('tailwindcss'),
        ],
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-42236657-2',
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: true,
        },
      },
    },
  ],
}
