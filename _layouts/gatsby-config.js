module.exports = {
  pathPrefix: '',
  siteMetadata: {
    title: `tiff's seedlings`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        rootNote: "/index",
        contentPath: `${__dirname}/..`,
        parseWikiLinks: true,
        ignore: [
          "**/_layouts/**",
          "**/.git/**",
          "**/.github/**",
          "**/.vscode/**",
        ],
      },
    },
  ],
};
