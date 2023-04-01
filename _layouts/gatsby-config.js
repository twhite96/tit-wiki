module.exports = {
  pathPrefix: "",
  siteMetadata: {
    title: `tiff's seedlings 🌱`,
  },
  plugins: [
    `gatsby-remark-auto-headers-improved`,
    {
      resolve: `gatsby-transformer-markdown-references`,
      options: {
        types: ["md"], // or ["MarkdownRemark"] (or both)
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `wiki.tiffanywhite.blog`,
      },
    },
    {
      resolve: `gatsby-theme-garden`,
      options: {
        rootNote: "/inbox",
        parseWikiLinks: true,
        contentPath: `/notes`,
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
