const composePlugins = require("next-compose-plugins");
const mdxEnhanced = require("next-mdx-enhanced");

module.exports = composePlugins(
  [
    mdxEnhanced({
      layoutPath: "./templates",
    }),
  ],
  {
    images: {
      domains: ["www.nasa.gov"],
    },
  }
);
