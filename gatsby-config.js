/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require("path");
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
);

module.exports = {
  siteMetadata: {
    title: `Radomir Skrzepij`,
    author: `UpCore`,
    authorUrl: `http://upco.re`,
    description: `Strona osobista`,
    keywords: `Radomir Skrzepij, strona osobista, frontend developer, front-end, javascript, design`,
    social: {
      twitter: 'https://twitter.com/Zyziu10',
      github: 'https://github.com/skrzepij',
      facebook: 'https://www.facebook.com/skrzepij',
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // Configure SASS to process Tailwind
        postCssPlugins: [require('tailwindcss')],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-KL8QDZ29XV'],
        head: true,
      },
      gtagConfig: {
        anonymize_ip: false,
        cookie_expires: 0,
        send_page_view: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', '.cache', 'public'],
        stages: ['develop'],
        emitWarning: true,
        failOnError: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Radomir Skrzepij Webpage',
        short_name: 'Radomir Skrzepij',
        start_url: '/',
        background_color: '#141000',
        theme_color: 'yellow',
        display: 'standalone',
        icon: 'src/images/icon.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/about/', '/projects/', '/contact/'],
      },
    },
    {
      resolve: '@sentry/gatsby',
      options: {
        dsn: 'https://3234ae163b0b4ea9bafa214d20903fe0@o560318.ingest.sentry.io/5695776',
        sampleRate: 0.7,
      },
    },
  ],
}
