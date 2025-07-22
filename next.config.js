module.exports = {
  images: {
    domains: ["www.nasa.gov"],
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/index",
        permanent: true,
      },
    ];
  },

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
