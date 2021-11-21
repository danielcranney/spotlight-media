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

module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/index",
        permanent: true,
      },
    ];
  },
};

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        //       externals: [
        //   "child_process",
        //   "dns",
        //   "fs",
        //   "net",
        //   "tls",
        // ]
        net: "empty",
        dns: "empty",
        child_process: "empty",
        tls: "empty",
        fs: "empty",
      };
    }

    return config;
  },
};
