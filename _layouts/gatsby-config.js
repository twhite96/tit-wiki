module.exports = {
  pathPrefix: "",
  siteMetadata: {
    title: `@tiff's notes`,
    author: "tiff",
    description: "A collection of notes and things I am thinking about.",
  },
  plugins: [
    `gatsby-remark-auto-headers-improved`,
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `wiki.tiffanywhite.blog`,
      },
    },
    {
      resolve: `gatsby-remark-double-brackets-link`,
      options: {
        stripBrackets: false,
      },
    },
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
  ],
};
