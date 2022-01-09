// redirct from index to jobapply
module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/jobapply",
        permanent: true,
      },
    ];
  },
};
