import type { GatsbyConfig } from "gatsby"
import { resolve } from "path"

const plugins: GatsbyConfig['plugins'] = [
  `gatsby-plugin-image`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-plugin-sharp`,
    options: {
      defaults: {
        formats: [`auto`],
        quality: 80,
        breakpoints: [750, 1080, 1366, 1920],
        backgroundColor: `transparent`,
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `GatsbyPortfolioSite`,
      short_name: `GatsbyPortfolioSite`,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#399`,
      display: `minimal-ui`,
      icon: `src/images/gatsby-icon.png`,
    },
  },
  `gatsby-plugin-offline`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-sass`,
  `gatsby-plugin-typegen`,
]

const siteMetadata: GatsbyConfig['siteMetadata'] = {
  title: `Gatsby Starter Blog`,
  author: {
    name: `Kyle Mathews`,
    summary: `who lives and works in San Francisco building useful things.`,
  },
  description: `A starter blog demonstrating what Gatsby can do.`,
  siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
  social: {
    twitter: `kylemathews`,
  },
}

const config: GatsbyConfig = {
  siteMetadata,
  plugins
}

export default config