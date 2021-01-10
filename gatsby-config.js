/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `RememberTheRalamo`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "www.quickstartadventures.com"
      }
    },
        {
      resolve: `gatsby-plugin-styled-components`,
    }
    {
      resolve: `gatsby-plugin-use-query-params`,
    }
  ],
}
