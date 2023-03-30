module.exports = {
  pathPrefix: "",
  siteMetadata: {
    title: `tiff's seedlings 🌱`,
  },
  plugins: [
    `gatsby-remark-auto-headers-improved`,
    {
      resolve: `gatsby-theme-garden`,
      options: {
        rootNote: "/inbox",
        parseWikiLinks: true,
        contentPath: `${__dirname}/..`,
        ignore: [
          "**/_layouts/**",
          "**/.git/**",
          "**/.github/**",
          "**/.vscode/**",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `wiki.tiffanywhite.blog`,
      },
    },
  ],
};
