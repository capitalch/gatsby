module.exports = {
  // siteMetadata: {
  //   title: ``,
  //   description: `Electronic goods retailers. We deal in SLR and mirrorless cameras, cellular/mobile phones, power bank, Led TV, laptops, audio products, laptops, domestic items`,
  //   author: `Kush Infotech`,
  //   siteUrl: 'https://capital-chowringhee.com/'
  // },
  siteMetadata: {
    title: `Capital Chowringhee Pvt Ltd, leading retailers of electronic goods`,
    description: `
    We deal with SLR and mirrorless cameras, cellular/mobile phones, power bank, Led TV, laptops, audio products, laptops, domestic items.
    `,
    url: 'https://www.capital-chowringhee.com',
    siteUrl: 'https://www.capital-chowringhee.com',
    image: 'https://www.capital-chowringhee.com/capital-board.jpg',
    author: {
      name: 'Sushant Agrawal',
      minibio: 'Sushant is software consultant in state of the art software technologies like React.js, Angular.js, Node.js, PostgreSql and many more.'
    },
    organization: {
      name: 'Capital Chowringhee Pvt Ltd',
      url: 'https://www.capital-chowringhee.com',
      logo: 'https://www.capital-chowringhee.com/logo.png'
    },
    social: {
      twitter: '@PvtCapital',
      fbAppID: 'https://www.facebook.com/CapitalChowringheePvtLtd'
    },
    categories: [
      {
        slug: 'Retailers',
        name: 'Retailers of electronic goods',
      }
    ]
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/mark-down`,
        name: "mark-down",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1200,
            linkImagesToOriginal: false
          }
        }]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `offers`,
        path: `${__dirname}/src/gallaries/offers`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `shop`,
        path: `${__dirname}/src/gallaries/shop`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `showcase`,
        path: `${__dirname}/src/gallaries/showcase`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `brands`,
        path: `${__dirname}/src/gallaries/brands`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contacts`,
        path: `${__dirname}/src/gallaries/contacts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logo`,
        path: `${__dirname}/src/gallaries/logo`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/src/gallaries/about`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `workshop`,
        path: `${__dirname}/src/gallaries/workshop`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `spareParts`,
        path: `${__dirname}/src/gallaries/spare-parts`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-50190756-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}