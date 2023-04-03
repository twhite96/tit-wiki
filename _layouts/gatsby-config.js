const path = require("path");

module.exports = {
  pathPrefix: "",
  siteMetadata: {
    title: `@tiff's notes`,
    author: "tiff",
    description: "A collection of notes and things I am thinking about.",
  },
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/..`,
        rootNote: `/inbox`,
        parseWikiLinks: true,
      },
    },
  ],
};
