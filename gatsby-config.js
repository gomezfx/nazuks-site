/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages-writing`,
        path: `${__dirname}/src/pages/writing`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages-video`,
        path: `${__dirname}/src/pages/video`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages-fashion`,
        path: `${__dirname}/src/pages/fashion`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Change plugin default options here, e.g.:
        // ssr: false
        // displayName: false, 
        // minify: false
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        /**
         * One convention is to place your Netlify CMS customization code in a
         * `src/cms` directory.
         */
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ]
}