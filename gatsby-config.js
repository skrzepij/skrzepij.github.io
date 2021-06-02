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
