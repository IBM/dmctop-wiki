module.exports = {
  siteMetadata: {
    title: 'IBM Db2 dmctop Wiki',
    description: 'A wiki for the Db2 command "dmctop"',
    keywords: 'dmctop,db2,ibm',
    lang: 'en'
  },
  pathPrefix: `/dmctop-wiki`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        short_name: 'Gatsby Theme Carbon',
        icon: 'src/images/favicon.svg',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      // disabled edit on github link
      // options: {
      //   mediumAccount: 'carbondesign',
      //   repository: {
      //     baseUrl:
      //       'https://github.com/carbon-design-system/gatsby-theme-carbon',
      //     subDirectory: '/packages/example',
      //   },
      // },
    },
  ],
};
